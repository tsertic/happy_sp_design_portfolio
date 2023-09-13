import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-focus": "rgb(var(--color-primary-focus) / <alpha-value>)",
        "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",

        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-focus": "rgb(var(--color-secondary-focus) / <alpha-value>)",
        "secondary-content":
          "rgb(var(--color-secondary-content) / <alpha-value>)",
        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
        "base-contentHeading":
          "rgb(var(--color-base-contentHeading) / <alpha-value>)",
        pink: "rgb(var(--color-pink) / <alpha-value>)",
        cyan: "rgb(var(--color-cyan) / <alpha-value>)",
        darkpurple: "rgb(var(--color-darkpurple) / <alpha-value>)",
      },
      fontSize: {
        button: [
          "16px",
          {
            lineHeight: "28px",
            fontWeight: "700",
          },
        ],
        bodyM: ["18px", { lineHeight: "28px", fontWeight: "500" }],
        bodyS: ["16px", { lineHeight: "26px", fontWeight: "500" }],

        headingL: [
          "56px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        headingLTablet: [
          "44px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        headingLMobile: [
          "36px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        headingM: [
          "40px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        headingMMobile: [
          "26px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],

        headingS: [
          "32px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        headingSMobile: [
          "24px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        headingCard: [
          "24px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
      },
      boxShadow: {
        button: "0 15px 15px -10px #FF9F8E",
      },
      gridTemplateRows: {
        mobile: "364px 182px 158px 182px 182px",
        tablet: "182px 158px 182px",
        desktop: "182px 158px;",
      },
      gridTemplateColumns: {
        mobile: "repeat(2,minmax(159px,1fr))",
        tablet: "repeat(4,minmax(159px,1fr))",
        desktop: "repeat(6,minmax(159px,1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
