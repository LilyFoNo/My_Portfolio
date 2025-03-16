import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        linkedin:
          "0 0 5px #0072b1, 0 0 25px #0072b1, 0 0 50px #0072b1, 0 0 200px #0072b1",
        gitHub: "0 0 5px #fff, 0 0 25px #fff, 0 0 50px #fff, 0 0 200px #fff",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/herobg.png')",
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans-serif"],
        moonDance: ["MoonDance", "sans-serif"],
        shadowsIntoLight: ["ShadowsIntoLight", "sans-serif"],
        indieFlower: ["IndieFlower", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities(
        {
          ".webkit-reflect": {
            WebkitBoxReflect:
              "below 0px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))",
          },
        },
        ["responsive", "hover"]
      );
    },
    addVariablesForColors,
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
