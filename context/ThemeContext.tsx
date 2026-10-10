"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "cyan" | "purple";

export interface ThemeColors {
  bg: string;
  bgSecondary: string;
  primary: string;
  secondary: string;
  light: string;
  deep: string;
  accent: string;
  glow: string;
  text: string;
  muted: string;
}

export const THEME_PALETTES: Record<ThemeMode, ThemeColors> = {
  cyan: {
    bg: "#020B0F",
    bgSecondary: "#031418",
    primary: "#00E5FF",
    secondary: "#22D3EE",
    light: "#67E8F9",
    deep: "#0891B2",
    accent: "#00E5FF",
    glow: "rgba(0, 229, 255, 0.35)",
    text: "#E6FBFF",
    muted: "#7FA9B3",
  },
  purple: {
    bg: "#050308",
    bgSecondary: "#0B0713",
    primary: "#A855F7",
    secondary: "#8B5CF6",
    light: "#C4B5FD",
    deep: "#6D28D9",
    accent: "#D946EF",
    glow: "rgba(168, 85, 247, 0.40)",
    text: "#F3EEFF",
    muted: "#9A8FB5",
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "cyan",
  colors: THEME_PALETTES.cyan,
  toggleTheme: () => {},
  setTheme: () => {},
  isLoaded: false,
});

const STORAGE_KEY = "cyber_portfolio_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("cyan");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Read saved theme from localStorage or fallback to cyan
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initialTheme: ThemeMode = saved === "purple" ? "purple" : "cyan";
    setThemeState(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    setIsLoaded(true);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const next = theme === "cyan" ? "purple" : "cyan";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: THEME_PALETTES[theme],
        toggleTheme,
        setTheme,
        isLoaded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
