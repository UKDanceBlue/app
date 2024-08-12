import Svg, { Path } from "react-native-svg";

import type { SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const NotificationBell = ({
  svgProps,
  color,
}: {
  svgProps?: SvgProps;
  color?: string;
}) => (
  <Svg id="Layer_1" x={0} y={0} viewBox="0 0 248 343" {...svgProps}>
    <Path
      // @ts-expect-error This works
      style={{ fill: color ?? "#0032A0" }}
      d="M106.6 96.74c0-.65.03-1.3 0-1.94-.41-7.72 5.46-16.26 15.32-17.24 10.02-.99 17.23 6.32 18.45 13.86.24 1.48.5 2.94.26 4.43-.13.83.31 1.19.97 1.43.52.19 1.06.34 1.59.52 20.5 7.15 35.56 24.8 39.35 46.16.7 3.95.86 7.95.86 11.95v48.29c0 .56.06 1.12-.01 1.67-.15 1.24.37 2.07 1.32 2.85 4.97 4.07 9.88 8.19 14.82 12.29 2.43 2.02 4.84 4.07 7.31 6.05 1.49 1.19 2.29 2.62 2.16 4.57-.08 1.2.03 2.42-.03 3.63-.12 2.41-1.63 3.94-4.04 4.12-.74.06-1.49.03-2.23.03H44.45c-.74 0-1.49.03-2.23-.03-2.15-.18-3.74-1.55-3.93-3.65-.17-1.75-.11-3.53-.02-5.3.06-1.15.67-2.11 1.57-2.85 1-.83 2-1.67 3-2.5 6.37-5.29 12.7-10.62 19.13-15.84 1.36-1.1 1.9-2.21 1.9-3.98-.07-17.12-.08-34.24-.03-51.36.04-12.25 3.57-23.46 10.56-33.52 7.5-10.81 17.55-18.33 29.96-22.69.74-.26 1.6-.35 2.24-.95zm19.22-2.13c1.09.09 3.12.27 5.16.43.7.06 1.07-.25 1.07-.9.03-4.3-3.75-8.07-8.23-8.2-4.5-.13-8.59 3.64-8.72 8.03-.03.88.26 1.17 1.15 1.05 2.86-.39 5.74-.47 9.57-.41zM123.87 265.11c-9.22-.43-16.13-4.25-20.72-12.03-.42-.72-.78-1.49-1.06-2.27-.38-1.05.12-2.04 1.15-2.5.88-.4 1.81-.37 2.74-.37 5.21-.02 10.42-.05 15.63-.07 6.51-.03 13.03-.06 19.54-.08.74 0 1.5-.05 2.23.04 1.47.18 2.28 1.38 1.86 2.82-.2.71-.55 1.38-.91 2.03-4.56 8.03-11.57 12.01-20.46 12.43z"
    />
  </Svg>
);

export default NotificationBell;
