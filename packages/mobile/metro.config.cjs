// Learn more https://docs.expo.io/guides/cus tomizing-metro
// @ts-expect-error - CommonJS
const { withSentryConfig } = require("@sentry/react-native/metro");
// @ts-expect-error - CommonJS
const { getDefaultConfig } = require("expo/metro-config");
// @ts-expect-error - CommonJS
const { withNativeWind } = require("nativewind/metro");

// Find the project and workspace directories
// eslint-disable-next-line no-undef
const projectRoot = __dirname;

// @ts-expect-error - CommonJS
const config = withNativeWind(withSentryConfig(getDefaultConfig(projectRoot)), {
  input: "./src/global.css",
  projectRoot,
});

/** @type {Partial<Record<string, string>>} */
const ALIASES = {
  "type-graphql": "type-graphql/shim",
};

const defaultResolver = config.resolver?.resolveRequest;
// @ts-expect-error - It is defined by expo/metro-config
config.resolver /*
Only ignore the first bit
 */.resolveRequest =
  /** @type {import("metro-resolver").CustomResolver} */
  (context, moduleName, platform) => {
    if (Object.keys(ALIASES).includes(moduleName)) {
      return context.resolveRequest(
        context,
        // Use an alias if one exists.
        ALIASES[moduleName] ?? moduleName,
        platform
      );
    } else {
      // @ts-ignore
      return defaultResolver(context, moduleName, platform);
    }
  };

// @ts-expect-error - It is defined by expo/metro-config
config.resolver /*
Only ignore the first bit
 */.unstable_enablePackageExports = true;

module.exports = config;
