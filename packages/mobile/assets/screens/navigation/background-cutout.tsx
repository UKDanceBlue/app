import { View } from "react-native";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

const ratio = { x: 1920, y: 440 };
/**
 * This can never not be the full width of the screen
 */
const BackgroundCutout = ({
  color,
  ...svgProps
}: {
  color?: string;
} & SvgProps) => (
  <View {...svgProps}>
    <Svg viewBox={`0 0 ${ratio.x} ${ratio.y}`} {...svgProps}>
      <Path
        d="M 0 0 H 700 C 700 0 700 280 960 280 C 1220 280 1220 0 1220 0 H 1920 V 440 H 0 Z"
        // @ts-expect-error This is fine
        style={{ fill: color ?? "#ededed" }}
        data-name="Layer 1"
      />
    </Svg>
  </View>
);

export default BackgroundCutout;
