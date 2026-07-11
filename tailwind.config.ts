import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        page: "#faf8f6",
        surface: "#ffffff",
        ink: "#1a1f2e",
        "ink-muted": "#6b7280",
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        "warm-gray": {
          50: "#faf8f6",
          100: "#f0ede8",
          200: "#e5e0d8",
          300: "#d4cec4",
          400: "#bcb5a8",
          500: "#a69b8d",
          600: "#8c8377",
          700: "#736a60",
          800: "#5c554d",
          900: "#3d3832",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
