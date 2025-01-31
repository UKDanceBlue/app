import type {
  NetInfoState,
  NetInfoUnknownState,
} from "@react-native-community/netinfo";
import NetInfo, { NetInfoStateType } from "@react-native-community/netinfo";
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
