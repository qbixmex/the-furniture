import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-helvetica-neue)", "sans-serif"],
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.font-livvic': {
          fontFamily: 'var(--font-livvic)',
        },
        '.font-helvetica-neue': {
          fontFamily: 'var(--font-helvetica-neue)',
        },
        '.font-copperplate': {
          fontFamily: 'var(--font-copperplate)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
