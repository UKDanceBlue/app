import Svg, { Path, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = ({
  svgProps, color
}: { svgProps?: SvgProps; color?: string }) => (
  <Svg
    id="Layer_1"
    x={0}
    y={0}
    viewBox="0 0 248 343"
    {...svgProps}
  >
    <Path
      // @ts-expect-error This works
      style={{ fill: color ?? "#0032A0" }}
      d="M111.29 236.57H99.53c-.72 0-1.44.02-2.17-.01-1.05-.04-1.28-.26-1.24-1.28.09-2.06.19-4.12.34-6.18.55-7.82 1.13-15.63 1.7-23.44.73-10.08 1.48-20.15 2.2-30.23.52-7.2 1-14.4 1.5-21.6.04-.62.07-1.24.07-1.85 0-.6-.31-.95-.93-.96-1.24-.02-2.48-.01-3.71-.04-.96-.03-1.23-.31-1.27-1.33-.04-1.13-.04-2.27 0-3.4s.28-1.33 1.54-1.37c.41-.02.82 0 1.24-.01 3.47-.02 3.21.36 3.22-3.08.01-6.08 0-12.17 0-18.25 0-.72 0-1.44-.04-2.16-.04-.6-.43-.92-1-.94-1.24-.05-2.47-.03-3.71-.09-.97-.04-1.19-.32-1.26-1.35-.01-.21-.01-.41-.01-.62.07-4.57-.64-4.05 3.83-4.01 1.55.02 2.73-.42 3.9-1.44 5.04-4.41 10.13-8.78 15.27-13.09 1.05-.88 1.48-1.81 1.45-3.17-.08-3.3-.03-6.6-.02-9.9 0-.72.01-1.44.05-2.16.03-.44.26-.83.73-.84 1.54-.03 3.09-.03 4.63.02.46.01.67.45.68.88.04.93.04 1.85.04 2.78 0 3.3.03 6.6-.01 9.9-.01.91.31 1.55.99 2.13 5.42 4.61 10.83 9.23 16.21 13.88.84.73 1.73 1.07 2.81.98.1-.01.21-.01.31 0 1.29.16 2.65-.39 3.87.42.35 1.63.2 3.27.1 4.9-.03.43-.45.65-.9.67-1.34.03-2.68.03-4.02.09-.55.03-.98.32-1.01.95-.03.62-.06 1.24-.06 1.85-.01 6.39-.01 12.79-.01 19.18 0 .51.01 1.03.06 1.54.06.6.44.89 1.03.9 1.24.02 2.48 0 3.71.04.99.03 1.23.28 1.26 1.32.03 1.24.02 2.47-.01 3.71-.02.75-.45 1.1-1.19 1.08-.31-.01-.62-.02-.93.01-1.2.14-2.72-.57-3.53.43-.75.93-.17 2.39-.08 3.6.51 7.61 1.09 15.22 1.64 22.83.25 3.39.49 6.79.73 10.18.91 13.16 1.83 26.33 2.74 39.49.19 2.67.37 5.35.54 8.02.04.6-.26.99-.88.99-3.4.01-6.8.01-10.21 0-.62 0-.89-.41-.9-.99-.02-.82-.03-1.65-.03-2.47v-17.33c0-.72.02-1.44-.01-2.17-.05-1.15-.27-1.37-1.52-1.39-1.75-.03-3.51-.01-5.26-.01-1.44 0-2.89.01-4.33.01-.76 0-1.1.39-1.1 1.15 0 2.68-.01 5.36-.01 8.04 0 4.54.01 9.08-.01 13.61-.01 1.41-.17 1.57-1.63 1.58-4.55.01-9.09-.01-13.63 0 0-.01 0-.01 0 0zm-3.14-55.32c.01 0 .01 0 0 0v5.24c0 .75.41 1.14 1.13 1.14 3.39.01 6.78 0 10.17-.02.59 0 .93-.37.93-.97.01-3.39.01-6.78 0-10.17 0-.59-.36-.97-.95-.98-3.39-.03-6.78-.04-10.17-.03-.71 0-1.12.41-1.12 1.17.02 1.53.01 3.08.01 4.62zm6.11-48.29h.01v-9.86c0-.62 0-1.23-.04-1.85-.03-.45-.32-.8-.76-.81-1.43-.05-2.87-.07-4.31-.04-.56.01-.97.34-.99.95-.03.72-.03 1.44-.03 2.16 0 5.55-.04 11.09.01 16.64.06 5.7-.92 4.61 4.97 4.71.75.01 1.14-.35 1.14-1.1v-10.8zm12.28-.33c0-3.49.02-6.99 0-10.48-.01-1.63-.15-1.76-1.73-1.79-1.13-.02-2.26.02-3.39.06-.58.02-.96.33-.98.94-.03.82-.03 1.64-.03 2.46 0 5.55-.04 11.09.01 16.64.05 5.25-.85 4.3 4.66 4.37 1.29.02 1.44-.16 1.45-1.42.02-3.59.01-7.18.01-10.78zm6.14-.05c-.01 0-.01 0 0 0-.01 3.5-.02 7.01 0 10.51.01 1.72.04 1.73 1.73 1.76 1.13.02 2.27.02 3.4-.03.59-.02.92-.4.94-1 .02-.51.03-1.03.03-1.54v-19.17c0-.52-.01-1.03-.03-1.55-.03-.74-.44-1.14-1.16-1.16-1.24-.03-2.47-.04-3.71 0-.99.03-1.2.25-1.21 1.35-.01 3.61.01 7.22.01 10.83zM123.27 254.93H68.86c-3.9 0-3.45.37-3.48-3.46 0-.41-.01-.82.01-1.24.05-1.22.19-1.39 1.5-1.4 6.18-.02 12.37.02 18.55-.04 1.4-.01 3.12.66 4.12-.44.87-.95.24-2.57.34-3.88.02-.31.01-.62.06-.92.07-.44.33-.77.78-.81.61-.06 1.23-.05 1.85-.05h61.83c.31 0 .62-.01.93 0 1.47.05 1.63.19 1.68 1.54.04 1.23.03 2.47.06 3.71.01.47.3.77.76.81.82.06 1.64.08 2.47.08 5.98.01 11.95 0 17.93.01.82 0 1.65.02 2.47.07.46.03.73.33.78.79.03.31.06.62.06.92-.07 5.01.69 4.31-4.17 4.31-18.05.02-36.08 0-54.12 0z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: color ?? "#0032A0" }}
      d="M211.97 115.91c-.07-1.04-.55-1.51-1.6-1.36-1.51.22-3.05.42-4.49.9-1.05.35-2.33-.14-3.17.88-2.78.19-5.52.51-8.08 1.72-2.94.12-5.82.65-8.64 1.48-2.25.59-4.66.43-6.79 1.54-2.31.31-4.67.35-6.85 1.36-2.52.17-4.98.63-7.39 1.4-2.3.36-4.63.52-6.84 1.35-2 .36-4 .74-6 1.08-.84.14-1.24.6-1.24 1.44 0 3.26.01 6.53 0 9.79 0 .85.44 1.35 1.22 1.49 2 .37 4.01.69 6.02 1.02 2.17.89 4.49 1.05 6.77 1.42 2.45.71 4.95 1.21 7.49 1.47 2.22.73 4.5 1.1 6.82 1.32 2.18.83 4.46 1.18 6.77 1.35 2.61.97 5.36 1.23 8.07 1.72.65.31 1.3.54 2.03.65 2.21.35 4.41.78 6.61 1.19 2.4.5 4.79.99 7.19 1.49 1.94.4 2.05.31 2.11-1.72.01-.41 0-.82 0-1.23v-29.89c.02-.63.03-1.24-.01-1.86zM70.3 121.46c-2.06-.42-4.12-.83-6.18-1.25-2.06-.42-4.12-.84-6.19-1.26-2.43-.74-4.93-1.11-7.45-1.34-.15-.13-.29-.36-.46-.39-2.1-.37-4.17-1.03-6.34-.91-.28-.32-.62-.49-1.05-.56-1.4-.25-2.81-.51-4.2-.81-3.33-.71-3.41-.66-3.41 2.82-.01 10.05 0 20.11 0 30.16 0 .62-.01 1.23.03 1.85.05.83.34 1.04 1.19.92.61-.09 1.21-.19 1.81-.28 1.9-.31 3.84-.48 5.64-1.26 2.28-.42 4.6-.57 6.82-1.31 1.17-.2 2.39-.25 3.48-.65 1.3-.47 2.79-.16 3.95-1.07 2.14-.04 4.2-.44 6.19-1.23 2.33-.07 4.59-.54 6.78-1.31 1.72-.12 3.39-.44 5.02-.98 2.09-.25 4.19-.47 6.19-1.2l-.06-17.57c-2.01-.67-4.08-1.03-6.19-1.23-1.82-.62-3.7-.85-5.57-1.14z"
    />
    <Path
      // @ts-expect-error This works
      style={{ fill: color ?? "#0032A0" }}
      d="M95.82 127.69c0-.82-.35-1.32-1.22-1.47-2.12-.35-4.24-.75-6.36-1.12-1.98-.83-4.11-.97-6.2-1.26l.06 17.57c1.85-.27 3.73-.41 5.5-1.11 2.32-.41 4.65-.8 6.97-1.24.78-.15 1.25-.64 1.25-1.5v-9.87z"
    />
  </Svg>
);

export default SvgComponent;
