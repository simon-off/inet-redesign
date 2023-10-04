import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      inherit: "inherit",
      gray: colors.zinc,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      blue: colors.sky,
    },
    fontFamily: {
      sans: ["inter", "sans-serif", "system-ui"],
      serif: ["serif", "Georgia"],
      mono: ["JetBrains Mono Variable", "monospace"],
    },
    extend: {
      transitionProperty: {
        "max-height": "max-height",
        translate: "translate",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
