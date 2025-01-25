import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        navy: "#072446",
        black: "#000000",
        grey: {
          100: "#E0E0E0",
          300: "#B7B7B7",
          500: "#585858"
        },
        green: {
          100: "#DBFFE1",
          500: "#78C142",
        },
        orange: {
          100: "#FFF6D0",
          500: "#FF8800",
        },
        red: {
          100: "#FFF0F0",
          500: "#FA646A"
        },
        blue: {
          500: "#1B9DDF"
        },
        yellow: {
          500: "#FAB900"
        }
      },
      fontFamily: {
        heading: ["Hanken Grotesk", "sans-serif"],
        sans: ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|border|text)-(red|green|blue|orange)-(100|500|700)/, // You can display all the colors that you need
      variants: ['lg', 'hover', 'focus', 'lg:hover'],      // Optional
    },
  ],
} satisfies Config;
