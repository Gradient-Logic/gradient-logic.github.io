import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0e1518",
          soft: "#3d4a50",
        },
        mist: {
          DEFAULT: "#e8eef1",
          elevated: "#f4f7f8",
        },
        teal: {
          DEFAULT: "#0b6e6a",
          deep: "#084f4c",
          soft: "#d4eeec",
          glow: "#7ec8c3",
        },
        sand: "#d9cfc0",
        line: "#c5d0d6",
        muted: "#6b7a82",
      },
      fontFamily: {
        display: ["var(--font-display)", "Times New Roman", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.85" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -1%, 0) scale(1.03)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "soft-pulse": "soft-pulse 6s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
