import type {
  NetInfoState,
  NetInfoUnknownState,
} from "@react-native-community/netinfo";
import NetInfo, { NetInfoStateType } from "@react-native-community/netinfo";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";

export function useNetworkStatus() {
  const [connectionInfo, setConnectionInfo] = useState<NetInfoState>({
    isConnected: null,
    isInternetReachable: null,
    type: NetInfoStateType.unknown,
    details: null,
  } as NetInfoUnknownState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() =>
    NetInfo.addEventListener((state) => {
      setConnectionInfo(state);
      setIsLoaded(true);
    })
  );

  return [connectionInfo, isLoaded] as const;
}

// export const useColorModeValue = <A, B>(lightValue: A, darkValue: B): A | B =>
//   useColorModeValueNativeBase(lightValue, darkValue) as A | B;
export function useColorModeValue<A, B>(lightValue: A, darkValue: B): A | B {
  const { colorScheme } = useColorScheme();
  return colorScheme === "light" ? lightValue : darkValue;
}

/**
 * Only use for non-NativeBase components, NativeBase components should just use something like "color.123"
 * @deprecated
 */
export const useThemeColors = () => {
  return {
    primary: {},
    secondary: {},
  };
};

/**
 * Only use for non-NativeBase components, NativeBase components should just use the font family name in a string like "body"
 * @deprecated
 */
export const useThemeFonts = () => {
  return {};
};
