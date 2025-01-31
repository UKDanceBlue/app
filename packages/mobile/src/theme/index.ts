import type { Theme as ReactNavigationTheme } from "@react-navigation/native";
import { useColorScheme } from "nativewind";

/*
 * Useful links for extending the theme:
 * https://docs.nativebase.io/default-theme
 * https://docs.nativebase.io/dark-mode
 */
// export const getCustomTheme = () =>
//   extendTheme({
//     colors,
//     components,
//     config: { initialColorMode: "light" },
//     fontConfig,
//     fontSizes,
//     fontWeights,
//     fonts,
//     letterSpacings,
//     lineHeights,
//     opacity,
//     shadows,
//   } as const);

// // 2. Get the type of the CustomTheme
// type CustomThemeType = ReturnType<typeof getCustomTheme>;

// // 3. Extend the internal NativeBase Theme
// declare module "native-base" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-object-type
//   interface ICustomTheme extends CustomThemeType {}
// }

export const useReactNavigationTheme = (): ReactNavigationTheme => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return {
    dark: isDark,
    fonts: {
      bold: {
        fontFamily: "opensans-condensed-bold",
        fontWeight: "bold",
      },
      heavy: {
        fontFamily: "opensans-condensed-bold",
        fontWeight: "700",
      },
      medium: {
        fontFamily: "opensans-condensed-bold",
        fontWeight: "500",
      },
      regular: {
        fontFamily: "opensans-condensed-bold",
        fontWeight: "normal",
      },
    },
    colors: isDark
      ? {
          primary: "#FFD700",
          background: "#121212",
          card: "#1E1E1E",
          text: "#FFFFFF",
          border: "#2C2C2C",
          notification: "#FFD700",
        }
      : {
          primary: "#FFD700",
          background: "#FFFFFF",
          card: "#FFFFFF",
          text: "#000000",
          border: "#E5E5E5",
          notification: "#FFD700",
        },
    // colors: isDark
    //   ? {
    //       primary: theme.colors.primary[300],
    //       background: theme.colors.gray[700],
    //       card: theme.colors.gray[800],
    //       text: theme.colors.lightText,
    //       border: theme.colors.gray[900],
    //       notification: theme.colors.primary[500],
    //     }
    //   : {
    //       primary: theme.colors.primary[600],
    //       background: theme.colors.white,
    //       card: theme.colors.light[100],
    //       text: theme.colors.darkText,
    //       border: theme.colors.light[400],
    //       notification: theme.colors.secondary[500],
    //     },
  };
};
