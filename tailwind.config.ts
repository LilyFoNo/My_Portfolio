import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
        linkedin: "0 0 5px #0072b1, 0 0 25px #0072b1, 0 0 50px #0072b1, 0 0 200px #0072b1",
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
  ],
} satisfies Config;
