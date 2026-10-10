import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="purple"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg-rgb) / <alpha-value>)",
          secondary: "rgb(var(--bg-2-rgb) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          light: "rgb(var(--light-rgb) / <alpha-value>)",
          deep: "rgb(var(--deep-rgb) / <alpha-value>)",
          secondary: "rgb(var(--secondary-rgb) / <alpha-value>)",
        },
        accent: "rgb(var(--accent-rgb, var(--primary-rgb)) / <alpha-value>)",
        hud: {
          text: "rgb(var(--text-rgb) / <alpha-value>)",
          muted: "rgb(var(--muted-rgb) / <alpha-value>)",
          light: "rgb(var(--light-rgb) / <alpha-value>)",
          glow: "var(--glow)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px var(--glow)",
        "glow-lg": "0 0 50px var(--glow)",
        "glow-sm": "0 0 12px var(--glow)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "scan-line": "scanline 8s linear infinite",
        "float-slow": "float 5s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "drop-shadow(0 0 15px var(--glow))" },
          "50%": { opacity: "0.85", filter: "drop-shadow(0 0 35px var(--glow))" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
