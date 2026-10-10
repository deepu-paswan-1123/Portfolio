"use client";

import React, { useState } from "react";
import { MonogramLogo } from "@/components/Common/MonogramLogo";
import { ThemeToggle } from "@/components/Common/ThemeToggle";
import { useAudio } from "@/context/AudioContext";
import { MobileMenuOverlay } from "@/components/Navigation/MobileMenuOverlay";

interface TopBarProps {
  onOpenAI?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenAI }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { playClick, playHover, playLaser } = useAudio();

  const handleMenuToggle = () => {
    playClick();
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-[72px] flex items-center backdrop-blur-md bg-bg/50 border-b border-primary/10 transition-all duration-300">
        {/* Inner content uses .site-container for consistent gutter spacing */}
        <div className="site-container flex items-center justify-between w-full">
          {/* Left: Monogram Brand */}
          <MonogramLogo />

          {/* Right: AI Assistant + Theme Switcher + Cut-Corner Menu Button */}
          <div className="flex items-center gap-2.5 md:gap-3.5">
            {onOpenAI && (
              <button
                onClick={() => {
                  playLaser();
                  onOpenAI();
                }}
                onMouseEnter={playHover}
                data-cursor="ai"
                className="hidden sm:inline-flex items-center gap-2 cut-corner-button border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-xs font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-bg hover:shadow-[0_0_15px_var(--glow)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span>ASK AI</span>
              </button>
            )}

            <ThemeToggle />

            {/* Sci-Fi Cut-Corner Menu Button with corner-bracket marks */}
            <button
              onClick={handleMenuToggle}
              onMouseEnter={playHover}
              data-cursor="menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="group relative flex h-9 w-9 items-center justify-center cut-corner-button border border-primary/50 bg-bg-secondary/90 transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_var(--glow)] focus:outline-none"
            >
              {/* Corner bracket marks */}
              <span className="pointer-events-none absolute left-0.5 top-0.5 font-mono text-[7px] text-primary">
                ⌜
              </span>
              <span className="pointer-events-none absolute right-0.5 top-0.5 font-mono text-[7px] text-primary">
                ⌝
              </span>
              <span className="pointer-events-none absolute left-0.5 bottom-0.5 font-mono text-[7px] text-primary">
                ⌞
              </span>
              <span className="pointer-events-none absolute right-0.5 bottom-0.5 font-mono text-[7px] text-primary">
                ⌟
              </span>

              {/* Menu Hamburger Bars -> X morph */}
              <div className="flex flex-col items-center justify-center gap-1">
                <span
                  className={`h-[1.5px] w-4 bg-primary transition-all duration-300 ${
                    menuOpen ? "translate-y-[5.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-4 bg-primary transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-4 bg-primary transition-all duration-300 ${
                    menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Overlay */}
      <MobileMenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
