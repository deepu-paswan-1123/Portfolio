"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SoundToggle } from "@/components/Common/SoundToggle";
import { useAudio } from "@/context/AudioContext";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact" },
];

export const BottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const { playClick, playHover } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    playClick();
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bottom-nav" aria-label="Bottom Navigation">
      {/* Central Pill with 8 Links */}
      <div className="bottom-nav__pill">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              onMouseEnter={playHover}
              data-cursor="nav"
              className={`bottom-nav__link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Radar Audio Toggle Button */}
      <div className="bottom-nav__radar">
        <SoundToggle size="md" className="!h-14 !w-14 shrink-0" />
      </div>
    </nav>
  );
};

