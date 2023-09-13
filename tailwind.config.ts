import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          "primary-focus": "rgb(var(--color-primary-focus) / <alpha-value>)",
          "primary-content":
            "rgb(var(--color-primary-content) / <alpha-value>)",

          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
          "secondary-focus":
            "rgb(var(--color-secondary-focus) / <alpha-value>)",
          "secondary-content":
            "rgb(var(--color-secondary-content) / <alpha-value>)",
          "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
          "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
          "base-contentHeading":
            "rgb(var(--color-base-contentHeading) / <alpha-value>)",
          "bg-pink": "rgb(var(--color-bg-pink) / <alpha-value>)",
          "bg-cyan": "rgb(var(--color-bg-cyan) / <alpha-value>)",
          "bg-darkpurple": "rgb(var(--color-bg-darkpurple) / <alpha-value>)",
        },
        fontSize: {
          nav: [
            "13px",
            {
              fontWeight: "500",
              lineHeight: "normal",
            },
          ],
          navMobile: [
            "16px",
            {
              fontWeight: "700",
              letterSpacing: "-0.286px",
              lineHeight: "normal",
            },
          ],
          footerLink: [
            "15px",
            {
              lineHeight: "normal",
              letterSpacing: "-0.234px",
              fontWeight: "400",
            },
          ],
          button: [
            "15px",
            {
              lineHeight: "normal",
              letterSpacing: "-0.234px",
              fontWeight: "400",
            },
          ],
          bodyM: [
            "16px",
            { lineHeight: "26px", fontWeight: "400", letterSpacing: "-.2px" },
          ],
          bodyS: ["14px", { lineHeight: "28px", fontWeight: "400" }],
          headingXL: [
            "56px",
            { lineHeight: "64px", fontWeight: "700", letterSpacing: "-2px" },
          ],
          headingL: [
            "40px",
            {
              lineHeight: "44px",
              fontWeight: "700",
              letterSpacing: "-1.714px",
            },
          ],
          headingLMobile: [
            "32px",
            {
              lineHeight: "44px",
              fontWeight: "700",
              letterSpacing: "-1.714px",
            },
          ],
          headingM: [
            "32px",
            {
              lineHeight: "45px",
              fontWeight: "800",
              letterSpacing: "-0.66px",
            },
          ],
          headingMMobile: [
            "28px",
            {
              lineHeight: "45px",
              fontWeight: "800",
              letterSpacing: "-0.66px",
            },
          ],

          headingS: [
            "30px",
            {
              lineHeight: "45px",
              fontWeight: "800",
              letterSpacing: "-0.619px",
            },
          ],
          headingSMobile: [
            "24px",
            {
              lineHeight: "45px",
              fontWeight: "800",
              letterSpacing: "-0.619px",
            },
          ],
          headingCard: [
            "16px",
            {
              lineHeight: "normal",
              fontWeight: "700",
              letterSpacing: "-0.286px",
            },
          ],
        },
        boxShadow: {
          button: "0 15px 15px -10px #FF9F8E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
