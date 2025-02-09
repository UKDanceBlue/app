import { Resource } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";
import { ATTR_DEPLOYMENT_ENVIRONMENT_NAME } from "@opentelemetry/semantic-conventions/incubating";

export const otlpResource = new Resource({
  [ATTR_SERVICE_NAME]: "server",
  [ATTR_DEPLOYMENT_ENVIRONMENT_NAME]: process.env.NODE_ENV || "development",
});
