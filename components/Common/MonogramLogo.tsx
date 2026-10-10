"use client";

import React from "react";
import { useAudio } from "@/context/AudioContext";

interface MonogramLogoProps {
  className?: string;
}

export const MonogramLogo: React.FC<MonogramLogoProps> = ({ className = "" }) => {
  const { playLaser } = useAudio();

  const handleScrollToTop = () => {
    playLaser();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      data-cursor="home"
      aria-label="Scroll to top"
      className={`group relative flex items-center gap-3 text-left focus:outline-none ${className}`}
    >
      {/* Cut-Corner Monogram Emblem */}
      <div className="relative flex h-10 w-10 items-center justify-center cut-corner-button border border-primary/60 bg-bg-secondary/90 transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_var(--glow)]">
        {/* Corner bracket accents */}
        <span className="absolute left-0.5 top-0.5 font-mono text-[8px] text-primary opacity-60">
          ⌜
        </span>
        <span className="absolute right-0.5 bottom-0.5 font-mono text-[8px] text-primary opacity-60">
          ⌟
        </span>

        {/* Monogram letters */}
        <span className="font-display text-sm font-black tracking-widest text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary-light">
          DP
        </span>

        {/* Inner subtle glow */}
        <div className="pointer-events-none absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Monogram Text Details */}
      <div className="hidden flex-col sm:flex">
        <span className="font-display text-xs font-bold tracking-wider text-hud-text transition-colors group-hover:text-primary">
          DEEPU PASWAN
        </span>
        <span className="font-mono text-[9px] tracking-widest text-primary/70">
          FULL-STACK DEV // .NET & MERN
        </span>
      </div>
    </button>
  );
};
