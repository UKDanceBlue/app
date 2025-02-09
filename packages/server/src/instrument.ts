"use strict";

import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { NodeSDK } from "@opentelemetry/sdk-node";
import PrismaInstrumentation from "@prisma/instrumentation";
import dotenv from "dotenv";

import { otlpResource } from "#lib/otlp.js";

const env: {
  OTEL_EXPORTER_OTLP_ENDPOINT?: string;
} = {};

dotenv.config({ processEnv: env });

if (!env.OTEL_EXPORTER_OTLP_ENDPOINT) {
  console.warn("No OTLP Endpoint configured");
}

// Configure the SDK to export telemetry data to the console
// Enable all auto-instrumentations from the meta package
const exporterOptions = {
  url: `${env.OTEL_EXPORTER_OTLP_ENDPOINT}v1/tracing`,
  headers: {},
} satisfies ConstructorParameters<typeof OTLPTraceExporter>[0];

export const otlpTraceExporter = new OTLPTraceExporter(exporterOptions);
// export const otlpMetricReader = new PeriodicExportingMetricReader({
//   exporter: new OTLPMetricExporter({
//     url: ,
//     headers: {},
//   }),
// });

const sdk = new NodeSDK({
  traceExporter: otlpTraceExporter,
  // metricReader: otlpMetricReader,
  instrumentations: [
    getNodeAutoInstrumentations({}),
    new PrismaInstrumentation.PrismaInstrumentation({
      middleware: true,
    }),
  ],
  resource: otlpResource,
});

// initialize the SDK and register with the OpenTelemetry API
// this enables the API to record telemetry
sdk.start();

// gracefully shut down the SDK on process exit
process.on("SIGTERM", async () => {
  try {
    await sdk.shutdown();
    console.log("Tracing shut down successfully");
  } catch (error) {
    console.error("Error shutting down tracing", error);
  } finally {
    process.exit(0);
  }
});

export default sdk;
