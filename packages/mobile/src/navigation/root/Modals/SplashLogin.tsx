import { AuthSource } from "@ukdanceblue/common";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import React from "react";
import type { ImageSourcePropType } from "react-native";
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  useWindowDimensions,
  View,
} from "react-native";

import { useLogin } from "@/common/auth";
import { useAllowedLoginTypes } from "@/common/hooks/useAllowedLoginTypes";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";

import { getRandomSplashLoginBackground } from "./SplashLoginBackgrounds";

const SplashLoginScreen = () => {
  const { allowedLoginTypes, allowedLoginTypesLoading } =
    useAllowedLoginTypes();

  const [loginLoading, trigger] = useLogin();

  const loading = allowedLoginTypesLoading || loginLoading;

  // TODO: FIX INTERVAL
  const [bgImage, setbgImage] = useState(getRandomSplashLoginBackground());
  useEffect(() => {
    const unsub = setInterval(() => {
      setbgImage(getRandomSplashLoginBackground());
    }, 5000);
    return () => clearInterval(unsub);
  }, []);

  return (
    <>
      <StatusBar />
      <View className={`absolute top-0 z-0 h-screen w-screen`}>
        <Image
          source={bgImage}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View className={`absolute bottom-0 z-0 h-screen w-screen`}>
        <Image
          alt="Welcome Overlay"
          source={
            require("../../../../assets/screens/login-modal/welcome-back-overlay.png") as ImageSourcePropType
          }
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View className={`mt-15 absolute bottom-10 z-50 w-full`}>
        {allowedLoginTypes.includes("ms-oath-linkblue") && (
          <View>
            <Button
              onPress={() => trigger(AuthSource.LinkBlue)}
              className={`m-10 mx-4`}
              size="xl"
            >
              <ButtonText className="text-center font-body text-xl ">
                Login with Linkblue
              </ButtonText>
            </Button>
          </View>
        )}
        {allowedLoginTypes.includes("anonymous") && (
          <View>
            <Button
              onPress={() => trigger(AuthSource.Anonymous)}
              className="m-10 mx-4"
              size="xl"
            >
              <ButtonText className="text-center font-body text-xl" >
                Continue as Guest
              </ButtonText>
            </Button>
          </View>
        )}
      </View>
      {loading && (
        <Center className="z-200 absolute left-0 top-0 h-full w-full">
          <ActivityIndicator size="large" />
        </Center>
      )}
    </>
  );
};

export default SplashLoginScreen;
