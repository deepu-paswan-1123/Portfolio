"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

interface FloatingAITriggerProps {
  onOpen: () => void;
}

export const FloatingAITrigger: React.FC<FloatingAITriggerProps> = ({ onOpen }) => {
  const { playLaser, playHover } = useAudio();

  const handleClick = () => {
    playLaser();
    onOpen();
  };

  return (
    <div
      className="fixed z-40 select-none"
      style={{
        bottom: "max(24px, env(safe-area-inset-bottom))",
        left: "max(20px, var(--gutter, 20px))",
      }}
    >
      <motion.button
        onClick={handleClick}
        onMouseEnter={playHover}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="ai"
        aria-label="Open Deepu AI Assistant"
        className="group relative flex items-center gap-2.5 cut-corner-button border border-primary/60 bg-bg-secondary/90 px-3.5 py-2.5 text-primary backdrop-blur-xl shadow-[0_0_20px_var(--glow)] transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_30px_var(--glow-strong)]"
      >
        {/* Pulsing Quantum Core Orb */}
        <div className="relative flex h-6 w-6 items-center justify-center">
          <span className="absolute h-full w-full rounded-full bg-primary/30 animate-ping" />
          <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
        </div>

        {/* Text readout badge */}
        <div className="flex flex-col text-left">
          <span className="font-display text-xs font-black tracking-wider text-hud-text group-hover:text-primary transition-colors">
            ASK DEEPU AI
          </span>
          <span className="font-mono text-[8.5px] tracking-widest text-primary/70">
            RESUME INTEL // v2.8
          </span>
        </div>

        {/* Outer Corner brackets */}
        <span className="pointer-events-none absolute left-0.5 top-0.5 font-mono text-[7px] text-primary opacity-60">
          ⌜
        </span>
        <span className="pointer-events-none absolute right-0.5 bottom-0.5 font-mono text-[7px] text-primary opacity-60">
          ⌟
        </span>
      </motion.button>
    </div>
  );
};
