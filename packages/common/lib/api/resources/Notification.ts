import { DateTimeISOResolver, URLResolver } from "graphql-scalars";
import type { DateTime } from "luxon";
import { Field, ID, ObjectType } from "type-graphql";

import { AccessControl } from "../../authorization/accessControl.js";
import { AccessLevel, dateTimeFromSomething } from "../../index.js";

import { TimestampedResource } from "./Resource.js";
@ObjectType()
export class NotificationResource extends TimestampedResource {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  body!: string;

  @Field(() => URLResolver, { nullable: true })
  url?: URL | null;

  @Field(() => String, { nullable: true })
  @AccessControl({ accessLevel: AccessLevel.CommitteeChairOrCoordinator })
  deliveryIssue?: string | null;

  @Field(() => DateTimeISOResolver, { nullable: true })
  @AccessControl({ accessLevel: AccessLevel.CommitteeChairOrCoordinator })
  deliveryIssueAcknowledgedAt?: Date | null;
  get deliveryIssueAcknowledgedAtDateTime(): DateTime | null {
    return dateTimeFromSomething(this.deliveryIssueAcknowledgedAt ?? null);
  }

  @Field(() => DateTimeISOResolver, {
    nullable: true,
    description:
      "The time the notification is scheduled to be sent, if null it is either already sent or unscheduled.",
  })
  sendAt?: Date | null;
  get sendAtDateTime(): DateTime | null {
    return dateTimeFromSomething(this.sendAt ?? null);
  }

  @Field(() => DateTimeISOResolver, {
    nullable: true,
    description: "The time the server started sending the notification.",
  })
  startedSendingAt?: Date | null;
  get startedSendingAtDateTime(): DateTime | null {
    return dateTimeFromSomething(this.startedSendingAt ?? null);
  }

  public getUniqueId(): string {
    return this.id;
  }

  public static init(init: Partial<NotificationResource>) {
    return NotificationResource.doInit(init);
  }
}

@ObjectType()
export class NotificationDeliveryResource extends TimestampedResource {
  @Field(() => ID)
  id!: string;

  @Field(() => Date, {
    nullable: true,
    description:
      "The time the server sent the notification to Expo for delivery.",
  })
  sentAt?: Date | null;

  @Field(() => Date, {
    nullable: true,
    description:
      "The time the server received a delivery receipt from the user.",
  })
  @AccessControl({ accessLevel: AccessLevel.CommitteeChairOrCoordinator })
  receiptCheckedAt?: Date | null;

  @Field(() => String, {
    nullable: true,
    description:
      "A unique identifier corresponding the group of notifications this was sent to Expo with.",
  })
  @AccessControl({ accessLevel: AccessLevel.CommitteeChairOrCoordinator })
  chunkUuid?: string | null;

  @Field(() => String, {
    nullable: true,
    description:
      "Any error message returned by Expo when sending the notification.",
  })
  @AccessControl({ accessLevel: AccessLevel.CommitteeChairOrCoordinator })
  deliveryError?: string | null;

  public getUniqueId(): string {
    return this.id;
  }

  public static init(init: Partial<NotificationDeliveryResource>) {
    return NotificationDeliveryResource.doInit(init);
  }
}
