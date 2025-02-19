import { Service } from "@freshgum/typedi";
import type { ExpoPushReceipt } from "expo-server-sdk";

import { logger } from "#lib/logging/standardLogging.js";
import { DeviceRepository } from "#repositories/device/DeviceRepository.js";
import { NotificationDeliveryRepository } from "#repositories/notificationDelivery/NotificationDeliveryRepository.js";

import { ExpoService } from "./ExpoService.js";

@Service([NotificationDeliveryRepository, DeviceRepository, ExpoService])
export class ExpoPushReceiptHandler {
  constructor(
    protected notificationDeliveryRepository: NotificationDeliveryRepository,
    protected deviceRepository: DeviceRepository,
    protected expoSdk: ExpoService
  ) {}

  public async handlePushReceipts() {
    const deliveries =
      await this.notificationDeliveryRepository.findUncheckedDeliveries();
    const deliveriesByReceiptId = new Map(
      deliveries.map((delivery) => [delivery.receiptId, delivery])
    );

    const chunkedIds = this.expoSdk.chunkPushNotificationReceiptIds(
      deliveries.map((delivery) => delivery.receiptId)
    );

    // A list of devices that need to be unsubscribed from notifications
    const devicesToUnsubscribe: number[] = [];

    for (const chunk of chunkedIds) {
      try {
        const receipts =
          // eslint-disable-next-line no-await-in-loop
          await this.expoSdk.getPushNotificationReceiptsAsync(chunk);
        const updateParam: { receipt: ExpoPushReceipt; deliveryId: number }[] =
          [];
        for (const [receiptId, receipt] of Object.entries(receipts)) {
          const delivery = deliveriesByReceiptId.get(receiptId);
          if (delivery) {
            updateParam.push({ receipt, deliveryId: delivery.id });
          }
          if (
            receipt.status === "error" &&
            receipt.details?.error === "DeviceNotRegistered" &&
            delivery?.device.id
          ) {
            devicesToUnsubscribe.push(delivery.device.id);
          }
        }
        // eslint-disable-next-line no-await-in-loop
        await this.notificationDeliveryRepository.updateReceiptChunk({
          receipts: updateParam,
        });
      } catch (error) {
        logger.error("Failed to fetch push receipts", { error });
      }
    }

    await Promise.all(
      devicesToUnsubscribe.map((deviceId) =>
        this.deviceRepository.unsubscribeFromNotifications({ id: deviceId })
      )
    );
  }
}
