"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SoundToggle } from "@/components/Common/SoundToggle";
import { ThemeToggle } from "@/components/Common/ThemeToggle";
import { portfolioData } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";

const NAV_LINKS = [
  { label: "01 // HOME", id: "hero" },
  { label: "02 // ABOUT", id: "about" },
  { label: "03 // SKILLS", id: "skills" },
  { label: "04 // PROJECTS", id: "projects" },
  { label: "05 // CERTIFICATES", id: "certificates" },
  { label: "06 // TESTIMONIALS", id: "testimonials" },
  { label: "07 // AWARDS", id: "awards" },
  { label: "08 // CONTACT", id: "contact" },
];

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const { playClick, playHover } = useAudio();
  const { contact } = portfolioData.aboutMe;

  const handleLinkClick = (id: string) => {
    playClick();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-bg/95 p-6 md:p-12"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-primary/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="font-mono text-xs font-bold tracking-widest text-primary">
                NAVIGATION MATRIX // ONLINE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <SoundToggle size="sm" />

              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="cut-corner-button border border-primary/40 bg-bg-secondary px-3 py-1 font-mono text-xs text-primary hover:border-primary"
              >
                [ CLOSE ✕ ]
              </button>
            </div>
          </div>

          {/* Center Links List */}
          <div className="my-auto flex flex-col items-center gap-3 py-6">
            {NAV_LINKS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleLinkClick(item.id)}
                onMouseEnter={playHover}
                data-cursor="navigate"
                className="group relative flex w-full max-w-md items-center justify-between cut-corner-button border border-primary/20 bg-bg-secondary/60 px-5 py-3 text-left transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--glow)]"
              >
                <span className="font-display text-base sm:text-lg font-bold tracking-wider text-hud-text transition-colors group-hover:text-primary">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  ENTER →
                </span>
              </motion.button>
            ))}
          </div>

          {/* Bottom Social & Status Footer */}
          <div className="flex flex-wrap items-center justify-between border-t border-primary/20 pt-4 text-xs font-mono text-hud-muted">
            <div className="flex items-center gap-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                GITHUB
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href={contact.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                X / TWITTER
              </a>
            </div>

            <div className="text-primary font-mono text-[10px]">
              {portfolioData.aboutMe.status}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
