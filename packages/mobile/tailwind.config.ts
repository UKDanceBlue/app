import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";
import type { Config } from "tailwindcss";

export default {
  darkMode: process.env.DARK_MODE || "media",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/core-components/**/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./src/hooks/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  presets: [require("nativewind/preset")],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    colors: {
      primary: {
        // BASE COLOR: #0032A0 (level 600), Dark Blue
        0: "#f0f5ff",
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
        950: "#00000A",
      },
      secondary: {
        // SECONDARY COLOR: #FFC72C (level 400), Gold
        0: "#fffdf5",
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
        950: "#00000A",
      },
      tertiary: {
        // TERTIARY COLOR: #F0740C (level 500), Orange
        0: "#fff7e6",
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
        950: "#00000A",
      },
      danger: {
        // 600 default?
        0: "#fff5f5",
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
        950: "#00000A",
      },
      error: {
        0: "#fff5f5",
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
        950: "#00000A",
      },
      success: {
        0: "#f0fdf4",
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
        950: "#00000A",
      },
      warning: {
        0: "#fffaf0",
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
        950: "#00000A",
      },
      info: {
        0: "#f0f5ff",
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
        950: "#00000A",
      },
      typography: {
        0: "#f8f9fa",
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
        950: "#00000A",
        white: "#FFFFFF",
        gray: "#D4D4D4",
        black: "#181718",
      },
      outline: {
        0: "#f8f9fa",
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
        950: "#00000A",
      },
      background: {
        0: "rgb(var(--color-background-0)/<alpha-value>)",
        50: "rgb(var(--color-background-50)/<alpha-value>)",
        100: "rgb(var(--color-background-100)/<alpha-value>)",
        200: "rgb(var(--color-background-200)/<alpha-value>)",
        300: "rgb(var(--color-background-300)/<alpha-value>)",
        400: "rgb(var(--color-background-400)/<alpha-value>)",
        500: "rgb(var(--color-background-500)/<alpha-value>)",
        600: "rgb(var(--color-background-600)/<alpha-value>)",
        700: "rgb(var(--color-background-700)/<alpha-value>)",
        800: "rgb(var(--color-background-800)/<alpha-value>)",
        900: "rgb(var(--color-background-900)/<alpha-value>)",
        950: "rgb(var(--color-background-950)/<alpha-value>)",
        error: "rgb(var(--color-background-error)/<alpha-value>)",
        warning: "rgb(var(--color-background-warning)/<alpha-value>)",
        muted: "rgb(var(--color-background-muted)/<alpha-value>)",
        success: "rgb(var(--color-background-success)/<alpha-value>)",
        info: "rgb(var(--color-background-info)/<alpha-value>)",
        light: "#FBFBFB",
        dark: "#181719",
      },
      indicator: {
        primary: "#0032A0",
        info: "#047de1",
        error: "#ff1a1a",
      },
    },
    extend: {
      fontFamily: {
        "mono": ["Roboto Mono", "monospace"],
        "bodoni": ["Bodoni-FLF-Roman", "serif"],
        "bodoni-italic": ["Bodoni-FLF-Italic", "serif"],
        "bodoni-bold": ["Bodoni-FLF-Bold", "serif"],
        "heading": ["Bodoni-FLF-Bold", "serif"],
        "bodoni-bold-italic": ["Bodoni-FLF-Bold-Italic", "serif"],
        "opensans-bold": ["OpenSans-Condensed-Bold", "sans-serif"],
        "opensans-light-italic": [
          "OpenSans-Condensed-Light-Italic",
          "sans-serif",
        ],
        "opensans-light": ["OpenSans-Condensed-Light", "sans-serif"],
        "body": ["OpenSans-Condensed-Light", "sans-serif"],
      },
      fontWeight: {
        extrablack: "950",
      },
      fontSize: {
        "2xs": "10px",
      },
      boxShadow: {
        "hard-1": "-2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-2": "0px 3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-3": "2px 2px 8px 0px rgba(38, 38, 38, 0.20)",
        "hard-4": "0px -3px 10px 0px rgba(38, 38, 38, 0.20)",
        "hard-5": "0px 2px 10px 0px rgba(38, 38, 38, 0.10)",
        "soft-1": "0px 0px 10px rgba(38, 38, 38, 0.1)",
        "soft-2": "0px 0px 20px rgba(38, 38, 38, 0.2)",
        "soft-3": "0px 0px 30px rgba(38, 38, 38, 0.1)",
        "soft-4": "0px 0px 40px rgba(38, 38, 38, 0.1)",
      },
    },
  },
  plugins: [gluestackPlugin],
} satisfies Config;
