import { Theme } from "native-base";
import type { IColorHues } from "native-base/src/theme/base/colors";

export const colors: Partial<Record<keyof Theme["colors"], IColorHues>> = {
  primary: { // BASE COLOR: #0032A0 (level 600), Dark Blue
    50: "#e0edff",
    100: "#BBC9E8",
    200: "#7fa7ff",
    300: "#4d84ff",
    400: "#1e61fe",
    500: "#0748e5",
    600: "#0032A0",
    700: "#002881",
    800: "#001850",
    900: "#000820",
  },
  secondary: { // SECONDARY COLOR: #FFC72C (level 400), Gold
    50: "#fff8da",
    100: "#ffebad",
    200: "#ffdd7d",
    300: "#ffd04b",
    400: "#FFC72C",
    500: "#e6a900",
    600: "#b38300",
    700: "#805e00",
    800: "#4e3800",
    900: "#1d1300",
  },
  tertiary: { // TERTIARY COLOR: #F0740C (level 500), Orange
    50: "#ffefdd",
    100: "#fed5b1",
    200: "#faba84",
    300: "#f79f54",
    400: "#f48324",
    500: "#F0740C",
    600: "#ab5206",
    700: "#7a3a03",
    800: "#4b2200",
    900: "#1e0900",
  },
  danger: { // 600 default?
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  warning: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  red: {
    50: "#ffe1e1",
    100: "#ffb1b1",
    200: "#ff7f7f",
    300: "#ff4c4c",
    400: "#ff1a1a",
    500: "#e60000",
    600: "#b40000",
    700: "#810000",
    800: "#500000",
    900: "#210000",
  },
  orange: {
    50: "#fff2db",
    100: "#ffdbaf",
    200: "#fdc57f",
    300: "#fcae4f",
    400: "#fa971e",
    500: "#e17d05",
    600: "#af6101",
    700: "#7e4500",
    800: "#4d2900",
    900: "#1e0c00",
  },
  yellow: {
    50: "#fffbda",
    100: "#fff4ad",
    200: "#ffec7d",
    300: "#ffe54b",
    400: "#ffdd1a",
    500: "#e6c400",
    600: "#b39800",
    700: "#806d00",
    800: "#4d4100",
    900: "#1c1600",
  },
  green: {
    50: "#dfffed",
    100: "#b2fed2",
    200: "#83fcb6",
    300: "#54fa9a",
    400: "#2bf97e",
    500: "#19df64",
    600: "#0eae4e",
    700: "#037c37",
    800: "#004a20",
    900: "#001a06",
  },
  blue: {
    50: "#dcf5ff",
    100: "#aeddff",
    200: "#7ec5ff",
    300: "#4daefd",
    400: "#1e97fb",
    500: "#047de1",
    600: "#0061b0",
    700: "#00457f",
    800: "#002a4f",
    900: "#000f20",
  },
  purple: {
    50: "#f2eaff",
    100: "#d3c5ef",
    200: "#b4a1e0",
    300: "#967bd1",
    400: "#7855c3",
    500: "#5f3caa",
    600: "#4a2f85",
    700: "#352060",
    800: "#20133c",
    900: "#0d051a",
  },
  gray: {
    50: "#e8f3ff",
    100: "#cfd8e3",
    200: "#b5bdcc",
    300: "#97a3b4",
    400: "#7b899d",
    500: "#626f84",
    600: "#4b5768",
    700: "#343e4b",
    800: "#1e2530",
    900: "#070c18",
  },
} as const;
