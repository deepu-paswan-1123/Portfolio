"use client";

import React from "react";
import { useAudio } from "@/context/AudioContext";

interface SoundToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export const SoundToggle: React.FC<SoundToggleProps> = ({
  className = "",
  size = "md",
}) => {
  const { isMuted, toggleAudio, playHover } = useAudio();

  const isSmall = size === "sm";

  return (
    <button
      onClick={toggleAudio}
      onMouseEnter={playHover}
      data-cursor="audio"
      aria-label={isMuted ? "Enable ambient audio" : "Mute audio"}
      className={`group relative flex items-center justify-center rounded-full border transition-all duration-300 ${
        isSmall ? "h-9 w-9" : "h-11 w-11"
      } ${
        !isMuted
          ? "border-primary bg-primary/20 shadow-[0_0_20px_var(--glow)]"
          : "border-primary/40 bg-bg-secondary/80 hover:border-primary hover:bg-primary/10"
      } ${className}`}
    >
      {/* Radar Crosshairs */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80">
        <div className="h-[1px] w-full bg-primary/60" />
        <div className="absolute h-full w-[1px] bg-primary/60" />
      </div>

      {/* Radar Sweep Line (active when not muted) */}
      {!isMuted && (
        <div className="pointer-events-none absolute inset-1 overflow-hidden rounded-full">
          <div className="radar-sweep-line h-full w-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,var(--primary)_360deg)] opacity-60" />
        </div>
      )}

      {/* Outer Ping Ring when active */}
      {!isMuted && (
        <span className="pointer-events-none absolute inset-0 -m-1 animate-ping rounded-full border border-primary/40 opacity-75" />
      )}

      {/* Center Radar Target Point & Equalizer Bars */}
      <div className="relative z-10 flex items-center justify-center gap-[2px]">
        {!isMuted ? (
          <div className="flex items-end gap-[2px] h-3">
            <span className="w-[2px] h-2 bg-primary animate-pulse" />
            <span className="w-[2px] h-3.5 bg-primary animate-pulse [animation-delay:150ms]" />
            <span className="w-[2px] h-1.5 bg-primary animate-pulse [animation-delay:300ms]" />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-hud-muted transition-colors group-hover:bg-primary" />
          </div>
        )}
      </div>
    </button>
  );
};
