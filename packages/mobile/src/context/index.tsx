import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AuthDataProvider } from "./auth";
import { DeviceDataProvider } from "./device";
import { FirebaseProvider } from "./firebase";
import { LoadingWrapper } from "./loading";
import { UserDataProvider } from "./user";

export { useAuthData } from "./auth";
export { useDeviceData } from "./device";
export { useFirebase } from "./firebase";
export { useLoading } from "./loading";
export { useUserData } from "./user";

export const CombinedContext = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <LoadingWrapper>
    <FirebaseProvider>
      <DeviceDataProvider>
          <AuthDataProvider>
            <UserDataProvider>
              <GestureHandlerRootView>
                <View style={{ minHeight: "100%", minWidth: "100%" }}>
                  {children}
                </View>
              </GestureHandlerRootView>
            </UserDataProvider>
          </AuthDataProvider>
      </DeviceDataProvider>
    </FirebaseProvider>
  </LoadingWrapper>
);
