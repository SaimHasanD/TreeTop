import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: "#071409",
          dark: "#0d2818",
          mid: "#163d22",
          light: "#1f5c2e",
        },
        amber: {
          DEFAULT: "#c17b2b",
          light: "#e8a020",
        },
        cream: "#f4ede4",
        sage: "#b8cdb0",
        charcoal: "#1c1c1c",
        offWhite: "#f7f4ef",
        leaf: {
          green: "#2d6e3a",
        }
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(193, 123, 43, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(193, 123, 43, 0)" },
        }
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s infinite",
      }
    },
  },
  plugins: [],
};
export default config;
