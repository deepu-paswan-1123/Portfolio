"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useAudio } from "@/context/AudioContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { playWarp } = useAudio();

  const handleToggle = () => {
    playWarp();
    toggleTheme();
  };

  const isCyan = theme === "cyan";

  return (
    <button
      onClick={handleToggle}
      data-cursor="theme"
      aria-label={`Switch to ${isCyan ? "Purple" : "Cyan"} theme`}
      className="group relative flex h-9 items-center gap-2 cut-corner-button border border-primary/50 bg-bg-secondary/80 px-3 py-1 text-xs backdrop-blur-md transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_var(--glow)] focus:outline-none"
    >
      {/* Active Color Dot */}
      <span
        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
          isCyan
            ? "bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"
            : "bg-[#A855F7] shadow-[0_0_8px_#A855F7]"
        }`}
      />

      {/* Label */}
      <span className="font-mono text-[11px] font-medium tracking-wider text-hud-text transition-colors group-hover:text-primary">
        {isCyan ? "CYAN // 01" : "PURPLE // 02"}
      </span>

      {/* Subtle icon indicator */}
      <svg
        className={`h-3 w-3 text-primary/70 transition-transform duration-500 group-hover:rotate-180 group-hover:text-primary`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    </button>
  );
};
