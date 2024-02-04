// import DBLogoCondensed from "../../../../../assets/svgs/DBLogoCondensed";
import AudioPlayer from "@common/components/AudioPlayer";
import { universalCatch } from "@common/logging";
import { showMessage } from "@common/util/alertUtils";
import { FontAwesome5 } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { openURL } from "expo-linking";
import { Box, Button, HStack, Text, View } from "native-base";
import { useMemo } from "react";
import { PixelRatio, useWindowDimensions } from "react-native";
import WebView from "react-native-webview";

import DBRibbon from "../../../../../assets/svgs/DBRibbon";

export const ExplorerItem = ({
  resourceLink = "https://danceblue.org",
  isText = false,
  blogTitle = "",
  blogContent = "",
  isAudio = false,
  isInstagram = false,
  isTikTok = false,
  isYouTube = false,
}: {
  resourceLink?: string;
  isText?: boolean;
  blogTitle?: string;
  blogContent?: string;
  isAudio?: boolean;
  isInstagram?: boolean;
  isTikTok?: boolean;
  isYouTube?: boolean;
}) => {
  const { width: windowX, fontScale } = useWindowDimensions();

  // DBLogoCondensed is currently broken
  // let icon = <DBLogoCondensed svgProps={{ width: screenWidth * 0.12, height: screenWidth * 0.12 }} letterColor="#0032A0" ribbonColor="#FFC72C"/>;
  let icon = (
    <DBRibbon
      svgProps={{ width: PixelRatio.get() * 12, height: PixelRatio.get() * 12 }}
    />
  );

  const headerFontSize = fontScale * 15;
  const blogTitleFontSize = fontScale * 16;
  const blogContentFontSize = fontScale * 14;

  let source = "Our Imagination";
  let link = "https://danceblue.org";

  // useMemo is a react hook that returns a memoized value
  // This means that the value will only be recreated if one of the dependencies changes
  // This is a handy way to avoid recreating values that are expensive to create or that
  // would cause unnecessary re-renders
  let content = useMemo(
    () => (
      <>
        <Text fontSize={blogContentFontSize} textAlign="justify" fontFamily="">
          DanceBlue is an entirely student-run organization that fundraises
          year-round for the DanceBlue Hematology/Oncology Clinic and culminates
          in a 24-hour no sitting, no sleeping dance marathon.
        </Text>
      </>
    ),
    [blogContentFontSize]
  );

  // Maybe replace this if/else with a more generic object? Just to avoid repetition, up to you though

  if (isText) {
    icon = (
      <FontAwesome5
        name="compass"
        size={PixelRatio.get() * 9}
        color="#0032A0"
      />
    );
    source = "DB Blog";
    link = "https://danceblue.org/news";

    content = (
      <View width="100%">
        <Text textAlign="center" fontSize={blogTitleFontSize}>
          {blogTitle}
        </Text>
        <Text fontSize={blogContentFontSize} textAlign="justify" fontFamily="">
          {" "}
          {blogContent}{" "}
        </Text>
        <Box width="full" alignItems="flex-end">
          <Button
            marginTop={0.5}
            width="1/3"
            onPress={() => {
              openURL(resourceLink).catch(universalCatch);
            }}
          >
            Read More!
          </Button>
        </Box>
      </View>
    );
  } else if (isAudio) {
    icon = (
      <FontAwesome5 name="music" size={PixelRatio.get() * 9} color="#0032A0" />
    );
    source = "DB Podcast";
    link = "https://danceblue.org/category/podcast";

    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
    }).catch(showMessage);

    const sound = new Audio.Sound();
    sound.loadAsync({ uri: resourceLink }).catch(universalCatch);

    content = (
      <>
        <View>
          <Text textAlign="center" fontSize={blogTitleFontSize}>
            {blogTitle}
          </Text>
          <AudioPlayer
            sound={sound}
            loading={!sound}
            title=""
            titleLink="https://danceblue.org/category/podcast/"
          />
        </View>
      </>
    );
  } else if (isInstagram) {
    icon = (
      <FontAwesome5
        name="instagram"
        size={PixelRatio.get() * 9}
        color="#0032A0"
      />
    );
    source = "Instagram";
    link = "https://instagram.com/uk_danceblue";
    content = (
      <>
        <Text>Instagram</Text>
      </>
    );
  } else if (isTikTok) {
    icon = (
      <FontAwesome5 name="tiktok" size={PixelRatio.get() * 9} color="#0032A0" />
    );
    source = "TikTok";
    link = "https://tiktok.com/@uk_danceblue";
    content = (
      <>
        <Text>TikTok</Text>
      </>
    );
  } else if (isYouTube) {
    icon = (
      <FontAwesome5
        name="youtube"
        size={PixelRatio.get() * 9}
        color="#0032A0"
      />
    );
    source = "YouTube";
    link = "https://www.youtube.com/channel/UCcF8V41xkzYkZ0B1IOXntjg";

    const width = 560;
    const height = 315;
    const ratio = height / width;

    const calculatedHeight = windowX * ratio;

    content = (
      <>
        <WebView
          style={{ height: calculatedHeight }}
          source={{ uri: resourceLink }}
          allowsFullscreenVideo={true}
        />
      </>
    );
  }

  return (
    <View
      /* borderBottomColor="#c5c6d0" borderBottomWidth={0.5} */ marginTop={5}
    >
      {/* THIS IS THE HEADER ROW */}
      <View borderBottomColor="#c5c6d0" borderBottomWidth={0.5}>
        <HStack alignItems="center" marginLeft={2} marginY={2}>
          {icon}
          <Text
            marginLeft={2}
            fontSize={headerFontSize}
            onPress={() => {
              openURL(link).catch(universalCatch);
            }}
          >
            {source}
          </Text>
        </HStack>
      </View>

      {/* THIS IS THE CONTENT ROW */}
      <HStack margin={2}>{content}</HStack>
    </View>
  );
};
