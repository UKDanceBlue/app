import { Image } from "expo-image";
import { View } from "react-native";

import marathon from "../../../../../assets/screens/home/marathon.jpg";

// import dbLogo from "../../../../../assets/logo/big-words.png";
// import ribbon from "../../../../../assets/screens/home/2020-ribbon.jpg";

/**
 * A header image container used on the home screen
 */
const HeaderImage = () => (
  <View className="h-full w-screen">
    <Image
      source={marathon}
      contentFit="cover"
      // blurRadius={10}
      alt="Picture of DB Marathon"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
    {/* <Box
      style={{ backgroundColor: "#ffffff55" }}
      width="full"
      height="full" />
    <Image
      source={dbLogo}
      size="full"
      resizeMode="contain"
      alt="DanceBlue Logo" />
*/}
  </View>
);

export default HeaderImage;
