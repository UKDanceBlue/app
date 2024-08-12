import * as React from "react";
import Svg, { Path } from "react-native-svg";

import type { SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const DBLogoCondensed = ({
  svgProps,
  letterColor,
  ribbonColor,
}: {
  svgProps: SvgProps;
  letterColor?: string;
  ribbonColor?: string;
}) => (
  <Svg id="Layer_1" x={0} y={0} viewBox="0 0 100 100" {...svgProps}>
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M256.85 331.1c-2.73-5.34-5.5-10.66-8.19-16.02-3.42-6.84-6.78-13.71-10.16-20.57-1.01-2.06-2.02-4.12-2.99-6.2-.37-.79-.55-1.62-.53-2.53.05-2.39-.01-4.79-.02-7.18.01-1.94.13-3.9 0-5.83-.12-1.69-.18-3.55-2.28-4.22-.58-.19-1.18-.32-1.77-.48-.31-.27-.62-.3-.94-.01l-.01.06c-.71 0-1.42 0-2.13.01l-.01-.06c-.63-.32-1.27-.3-1.91-.02-.08.03-.15.05-.23.08-1.19-.02-2.39-.07-3.58-.05-.55.01-.74-.15-.77-.73-.12-2.36-.14-2.35 2.22-2.36 1.19 0 2.39-.02 3.58-.04h3.11c1.31.01 2.63.04 3.94.04 8.99-.01 17.99-.02 26.98-.04 5.76.01 11.51-.05 17.26.07 4.35.09 8.64.7 12.85 1.88 8.32 2.34 15.54 6.49 21.4 12.88 3.74 4.08 6.55 8.73 8.44 13.97 1.1 3.03 1.97 6.11 2.51 9.26.68 3.93 1.03 7.92.93 11.93-.07 2.79.06 5.59-.03 8.38-.16 5.08-.8 10.1-2.48 14.94-.22.62-.33 1.28-.53 2.04h1.36c8.79-.01 17.58-.09 26.36-.02 5.86.05 11.66.66 17.24 2.61 6.85 2.4 12.48 6.32 15.27 13.3 1.63 4.08 2.14 8.33 1.46 12.81-1.15 7.58-5.53 12.53-11.95 16.14-4.43 2.48-9.2 3.83-14.14 4.71-.36.07-.67.18-1.07.45 2.56.48 5.05.83 7.48 1.49 8.68 2.38 16.51 6.08 21.43 14.11 2.59 4.23 3.48 8.95 3.19 13.86-.25 4.23-1.13 8.34-3.34 12.06-3.52 5.93-8.84 9.57-15.14 11.99-3.77 1.44-7.69 2.28-11.66 2.82-2.46.33-4.95.52-7.45.51-15.94-.03-31.88-.03-47.82.01-1.1 0-1.42-.28-1.36-1.37.09-1.73.02-1.74 1.78-1.74 2.48 0 4.95.04 7.43-.01 2.41-.05 4.14-1.07 4.27-4.2.48-12.36.14-24.73.19-37.1.08-16.5.02-33 .02-49.49v-1.35c-.74.27-.95.92-1.35 1.37-3.75 4.19-8.15 7.5-13.08 10.19-6.57 3.59-13.64 5.7-20.91 7.21-1.63.34-2.11.11-2.89-1.37-.53-1.01-1.03-2.04-1.59-3.03-.35-.61-.2-.76.46-.89 3.76-.74 7.28-2.09 10.34-4.47 4.49-3.49 7.44-8.05 9.41-13.35 1.27-3.43 2.07-6.96 2.57-10.55.39-2.81.57-5.66.6-8.5.08-7.03.1-14.06 0-21.09-.09-6.01-.78-11.97-2.68-17.72-2.24-6.77-5.95-12.49-12.21-16.23-3.64-2.18-7.61-3.26-11.86-3.46-1.77-.08-3.52-.37-5.28.06-.98-.11-1.9.14-2.8.48-.74-.05-1.36.24-1.95.63-1.81.64-3.2 1.79-4.07 3.5-.5.99-1.14 2-.45 3.17v17.34c-.02.07-.04.14-.07.22-.05.1-.1.19-.15.29-.01.52-.03 1.03-.03 1.55 0 10.83 0 21.66-.01 32.49-.02.46.17.96-.21 1.37zm86.85 112.93c2.12.19 4.17-.17 6.2-.73 5.66-1.54 9.84-4.81 12-10.38 1.69-4.36 2.04-8.96 2.27-13.57.1-2.01-.07-4.03-.17-6.05-.16-3.16-.57-6.23-1.45-9.28-1.64-5.64-5.49-9.03-10.89-10.69-4.34-1.34-8.82-1.99-13.4-2.08-1.07-.02-1.05.29-1.05 1.06.02 14.93.01 29.86.03 44.79 0 1.2-.19 2.39.08 3.61.34 1.55 1.32 2.63 2.84 3.12 1.19.39 2.37.06 3.54.2zm-6.47-75.18c-.01 1.04-.01 2.08-.01 3.12 0 5.43 0 10.86.01 16.29 0 .51-.21 1.14.76 1.09 3.97-.2 7.93-.46 11.76-1.62 4.48-1.36 7.96-3.86 9.72-8.39 1.67-4.31 1.67-8.87 1.72-13.35.02-2.08-.03-4.24-.31-6.37-.42-3.22-.89-6.38-2.46-9.27-2.37-4.37-6.08-6.71-11.02-6.95-2.29-.11-4.61-.14-6.9.18-1.19.17-2.13.69-2.66 1.78-.63 1.29-.66 2.66-.65 4.08.08 6.47.04 12.94.04 19.41z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M225.66 268.13c.08-.03.15-.05.23-.08.64.01 1.28.01 1.91.02l.01.06c.11 4.81 1.24 9.43 2.78 13.95 1.8 5.25 4.34 10.18 6.8 15.13 13.67 27.54 27.91 54.78 42.14 82.04 5.48 10.5 10.98 20.98 16.49 31.47.34.64.41 1.22.2 1.93-1.99 6.74-3.93 13.5-5.9 20.25-1.33 4.56-2.68 9.12-4.05 13.75-.42-.24-.52-.63-.69-.95-17.94-33.68-35.9-67.35-53.78-101.06-4.26-8.04-7.76-16.43-10.71-25.05-1.22-3.56-2.28-7.17-3.05-10.85-.7-3.37-.73-6.79-.58-10.22.31-7.34 1.87-14.41 4.48-21.26 1.18-3.07 2.48-6.09 3.72-9.13z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M243.46 370.85c1.38 2.56 2.73 5.13 4.14 7.66.35.62.07 1.05-.16 1.54-4.64 9.77-9.27 19.55-13.91 29.32-6.41 13.51-12.83 27.02-19.24 40.53-.08.18-.2.34-.29.51-.47-.05-.41-.48-.49-.72-3.71-10.82-7.39-21.64-11.13-32.45-.34-.99-.25-1.76.18-2.69 6.66-14.22 13.29-28.46 19.92-42.7.13-.28.21-.59.31-.89l.04-.07c6.76 0 13.53 0 20.29.01.11-.01.22-.03.34-.05z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M257.23 295.4c.02-.07.04-.14.07-.22 3.56-7.85 6.7-15.81 6.47-24.65.9-.34 1.82-.59 2.8-.48 1.29 2.82 2.64 5.63 3.86 8.48 2.48 5.77 4.24 11.76 4.98 18 .32 2.67.77 5.35.58 8.05-.22 3.19-.71 6.33-1.36 9.48-1.31 6.34-3.38 12.43-5.58 18.49-1.5 4.12-3.15 8.18-5.07 12.47-2.37-4.6-4.63-9-6.89-13.39.2-.19.18-.43.18-.67l-.03-35.29c.01-.09 0-.18-.01-.27z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M261.14 264.95c-8.99.01-17.99.03-26.98.04-1.31 0-2.63-.02-3.94-.04.85-4.44 2.15-8.49 6.83-10.56 6.31-2.78 12.34-2.48 18.23 1.05.8.48 1.43 1.15 1.97 1.9 1.68 2.34 3.22 4.75 3.89 7.61z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M224.43 367.78c2.65-5.8 5.31-11.6 8.06-17.62.92 1.78 1.74 3.36 2.56 4.94-.02.24-.05.47-.07.71-.03 2.89.12 5.79-.2 8.68-.16 1.5-1.13 2.78-2.64 3.09-2.55.51-5.14.17-7.71.2z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: letterColor ?? "#0032A0" }}
      d="M224.43 367.78c2.57-.03 5.16.31 7.71-.21 1.52-.31 2.48-1.59 2.64-3.09.32-2.89.17-5.78.2-8.68.28-.11.24.32.48.28l-.01-.01c-.02.22 0 .41.25.49l-.01-.02c-.01.22 0 .42.25.5l-.01-.02c.42 1.12.97 2.18 1.68 3.14l-.02-.01c0 .21 0 .42.26.48l-.01-.02c.54 1.35 1.19 2.65 2.06 3.82.3.63.59 1.26.89 1.89.25.32.23.81.65 1.02l-.01-.02c-.01.21-.01.42.25.5l-.01-.02c-.02.22.04.4.26.49l-.01-.02c.15.81.76 1.42 1.01 2.18-.41.37-.91.22-1.37.22-5.84.01-11.68 0-17.53.02-.41 0-.88-.19-1.24.19l-.04.07c-.47-.14-1.23.25-1.36-.4-.17-.83-.08-1.73-.02-2.6.02-.23.41-.14.64-.15.83 0 1.63-.01 2.42-.02z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M230.91 268.07c.59.16 1.19.29 1.77.48 2.1.67 2.16 2.53 2.28 4.22.13 1.93.01 3.89 0 5.83-1.01.39-1.77 1.19-2.79 1.72-1.28-4-2.23-8-2.21-12.19l.01-.06c.31-.01.62 0 .94 0z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: letterColor ?? "#0032A0" }}
      d="m257.25 295.67.03 35.29c0 .24.01.48-.18.67-.08-.18-.17-.35-.25-.53.38-.41.19-.91.19-1.37.01-10.83.01-21.66.01-32.49 0-.52.02-1.03.03-1.55.06-.01.12-.01.17-.02z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M228.13 264.95h-1.02c.48-1.06.97-2.12 1.45-3.18.06.02.11.05.17.07-.2 1.03-.4 2.07-.6 3.11z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M239.92 364.44c-.87-1.17-1.52-2.47-2.06-3.82 1.02 1.1 1.48 2.49 2.06 3.82z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M237.63 360.16a13.01 13.01 0 0 1-1.68-3.14c.94.85 1.19 2.06 1.68 3.14z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M242.96 370.47c-.26-.77-.86-1.37-1.01-2.18.75.53.88 1.4 1.19 2.18l-.03.02c-.05-.02-.1-.03-.15-.02z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M241.47 367.35c-.42-.21-.41-.7-.65-1.02.36.24.74.48.65 1.02z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M235.47 356.09c-.24.04-.2-.39-.48-.28.02-.24.05-.47.07-.71.24.28.51.56.41.99z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M235.71 356.56c-.25-.08-.28-.27-.25-.49.32.05.3.26.25.49z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M235.96 357.04c-.26-.08-.27-.28-.25-.5.28.07.34.24.25.5z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M237.87 360.64c-.26-.07-.26-.28-.26-.48.32.03.33.23.26.48z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M241.71 367.83c-.26-.08-.26-.28-.25-.5.3.06.3.27.25.5z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M241.95 368.3c-.21-.1-.28-.27-.26-.49.3.06.35.24.26.49z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M243.46 370.85c-.11.02-.23.04-.34.05 0-.14 0-.28-.01-.42l.03-.02c.25.01.27.22.32.39z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: ribbonColor ?? "#FFC72C" }}
      d="M261.81 271.16c.15 2.9-.35 5.72-1.05 8.6-1.15-.64-2.31-1.28-3.47-1.92-.7-1.18-.05-2.19.45-3.17.87-1.72 2.26-2.87 4.07-3.51z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: letterColor ?? "#0032A0" }}
      d="M227.8 268.07c-.64-.01-1.28-.01-1.91-.02.64-.28 1.28-.31 1.91.02z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: letterColor ?? "#0032A0" }}
      d="M230.91 268.07c-.31 0-.63-.01-.94-.01.31-.29.62-.26.94.01z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: letterColor ?? "#0032A0" }}
      d="M257.25 295.67c-.06 0-.12.01-.17.01.05-.1.1-.19.15-.29.01.1.02.19.02.28z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: letterColor ?? "#0032A0" }}
      d="M243.11 370.49c0 .14 0 .28.01.42-6.76 0-13.53 0-20.29-.01.36-.38.83-.19 1.24-.19 5.84-.01 11.68-.01 17.53-.02.46 0 .96.16 1.37-.22.04-.01.09 0 .14.02z"
    />
  </Svg>
);

export default DBLogoCondensed;
