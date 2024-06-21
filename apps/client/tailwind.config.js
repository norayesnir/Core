/** @type {import('tailwindcss').Config} */
export default {
  content: ["./wp-content/themes/socialbrothers/**/*.{php,ts,svelte,twig}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1148px",
          "2xl": "1148px",
        },
      },
      fontFamily: {
        heading: ['"Montserrat"'],
        body: ['"Nunito Sans"'],
      },
      fontSize: {
        subtitle: ["1rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        h1: ["3rem", { lineHeight: "4rem", fontWeight: 700 }],
        h2: ["2.5rem", { lineHeight: "3rem", fontWeight: 700 }],
        h3: ["2rem", { lineHeight: "2.5rem", fontWeight: 700 }],
        h4: ["1.5rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        h5: ["1.25rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        h6: ["1rem", { lineHeight: "1.5rem", fontWeight: 700 }],
        p: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.2px",
            fontWeight: 400,
          },
        ],
        caption: [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.2px", fontWeight: 700 },
        ],
      },
      colors: {
        primary: {
          900: "#020821",
          800: "#0b0d34",
          700: "#231c5e",
          500: "#482f8b",
          400: "#6a40b1",
          100: "#9a6bca",
          80: "#c987e2",
          50: "#e9a9f2",
          20: "#f9e0fb",

          dark: "#0b0d34" /* 800 */,
          DEFAULT: "#6a40b1" /* 400 */,
          light: "#f9e0fb" /* 20 */,
        },
        secondary: {
          900: "#020c27",
          800: "#051b32",
          600: "#0f3c52",
          300: "#1e6d83",
          80: "#32adc2",
          40: "#47e9ff",
          30: "#8ce8ff",
          20: "#d2ecff",
          10: "#f5f7ff",

          dark: "#051b32" /* 800 */,
          DEFAULT: "#32adc2" /* 80 */,
          light: "#f5f7ff" /* 10 */,
        },
        cta: {
          900: "#220003",
          800: "#3e020a",
          700: "#7e091a",
          500: "#c1122f",
          400: "#ff1c42",
          90: "#ff6979",
          60: "#ff9f95",
          40: "#ffbda5",
          20: "#ffdecc",

          dark: "#220003" /* 900 */,
          DEFAULT: "#ff1c42" /* 400 */,
          light: "#ffdecc" /* 20 */,
        },
        neutral: {
          900: "#09090a",
          800: "#101013",
          700: "#252329",
          500: "#46454a",
          200: "#68676b",
          90: "#8a898c",
          60: "#acabad",
          40: "#cccbcd",
          20: "#ebebeb",
          5: "#f5f5f5",
        },
        font: {
          DEFAULT: "#09090a" /* neutral 900 */,
          link: "#c987e2" /* primary 80 */,
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
