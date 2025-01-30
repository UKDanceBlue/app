import { useEffect, useState } from "react";
import { Dimensions, useWindowDimensions } from "react-native";
import type { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

import * as tailwindConfig from "@/tailwind.config";

interface BreakpointInfo {
  breakpoint: number;
  key: breakpoints;
  isValid?: boolean;
  value?: unknown;
}

const TailwindTheme = resolveConfig(tailwindConfig as Config);
const screenSize = TailwindTheme.theme.screens;

type breakpoints = keyof typeof screenSize | "default";

type BreakPointValue = Partial<Record<breakpoints, unknown>>;

const resolveScreenWidth: Partial<Record<string, number>> = {
  default: 0,
};

Object.entries(screenSize).forEach(([key, value]) => {
  if (typeof value === "string") {
    resolveScreenWidth[key] = Number.parseInt(value.replace("px", ""), 10);
  }
});

export const getBreakPointValue = (values: BreakPointValue, width: number) => {
  if (typeof values !== "object") return values;

  const mediaQueriesBreakpoints: BreakpointInfo[] = [
    {
      key: "default",
      breakpoint: 0,
      isValid: true,
    },
  ];
  (Object.keys(resolveScreenWidth) as breakpoints[]).forEach((key) => {
    const isValid = isValidBreakpoint(resolveScreenWidth[key]!, width);

    mediaQueriesBreakpoints.push({
      key,
      breakpoint: resolveScreenWidth[key]!,
      isValid,
    });
  });

  mediaQueriesBreakpoints.sort(
    (a: BreakpointInfo, b: BreakpointInfo) => a.breakpoint - b.breakpoint
  );

  mediaQueriesBreakpoints.forEach((breakpoint: BreakpointInfo, index) => {
    breakpoint.value = Object.prototype.hasOwnProperty.call(
      values,
      breakpoint.key
    )
      ? values[breakpoint.key]
      : mediaQueriesBreakpoints[index - 1]?.value ||
        mediaQueriesBreakpoints[0]?.value;
  });

  const lastValidObject = getLastValidObject(mediaQueriesBreakpoints);

  const finalBreakPointResolvedValue = !lastValidObject
    ? values
    : lastValidObject.value;
  return finalBreakPointResolvedValue;
};

export function useBreakpointValue(values: BreakPointValue) {
  const { width } = useWindowDimensions();

  const [currentBreakPointValue, setCurrentBreakPointValue] = useState(
    getBreakPointValue(values, width)
  );

  useEffect(() => {
    if (typeof values === "object") {
      const finalBreakPointResolvedValue = getBreakPointValue(values, width);
      setCurrentBreakPointValue(finalBreakPointResolvedValue);
    }
  }, [values, width]);

  if (typeof values !== "object") return values;

  return currentBreakPointValue;
}

export function isValidBreakpoint(
  breakPointWidth: number,
  width: number = Dimensions.get("window").width
) {
  const windowWidth = width;

  if (windowWidth >= breakPointWidth) {
    return true;
  }
  return false;
}

function getLastValidObject(mediaQueries: BreakpointInfo[]) {
  for (let i = mediaQueries.length - 1; i >= 0; i--) {
    if (mediaQueries[i].isValid) {
      return mediaQueries[i];
    }
  }
  return null; // No valid object found
}
