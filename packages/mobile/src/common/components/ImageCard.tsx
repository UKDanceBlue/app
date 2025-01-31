import { Image } from "expo-image";
import * as WebBrowser from "expo-web-browser";
import { PixelRatio, TouchableHighlight } from "react-native";

import { Box } from "@/components/ui/box";

/**
 * A card showing a Sponsor's logo that link's to their website
 */
const SponsorCard = ({
  sponsorLink,
  name,
}: {
  imagePath: string;
  sponsorLink?: string;
  name: string;
}) => {
  return (
    <TouchableHighlight
      onPress={
        sponsorLink ? () => WebBrowser.openBrowserAsync(sponsorLink) : undefined
      }
      underlayColor="#dddddd"
      style={{ flex: 1 }}
    >
      <Box className="m-2 flex-1 justify-center rounded-lg bg-white p-1 shadow">
        <Image
          source={{
            uri: undefined,
            width: PixelRatio.getPixelSizeForLayoutSize(75),
            height: PixelRatio.getPixelSizeForLayoutSize(50),
          }}
          alt={name}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </Box>
    </TouchableHighlight>
  );
};

export default SponsorCard;
