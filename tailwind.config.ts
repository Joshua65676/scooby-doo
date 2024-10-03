import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        larken: ['LarkenDemo', 'serif'],
        cinema: ['CinemaCartoon', 'sans-serif'],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#725029",
        tertiary: "#F8C165",
        secondary: "#FEE185",
        tokeno:  "#FCF3DD",

      },
      screens: {
        sm: '300px',
        mx: '350px',
        xm: '410px',
        md: '768px',
        lg: '876px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
