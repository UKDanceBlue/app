import { Linking } from "react-native";

import { universalCatch } from "@/common/logging";
import { Text } from "@/components/ui/text";

export function DBHeaderText() {
  return (
    <Text
      onPress={async () => {
        if (
          await Linking.canOpenURL("https://www.danceblue.org/").catch(
            universalCatch
          )
        ) {
          Linking.openURL("https://www.danceblue.org/").catch(universalCatch);
        }
      }}
      className="font-bodoni-flf-bold overflow-visible pl-2 text-2xl color-primary-600"
      bold
    >
      DanceBlue
    </Text>
  );
}
