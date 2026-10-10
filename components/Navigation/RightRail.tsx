"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";

export const RightRail: React.FC = () => {
  const { stats } = portfolioData.aboutMe;
  const { playHover } = useAudio();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "certificates",
      "testimonials",
      "awards",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const statsList = [
    { label: stats.projectsCount, target: "projects", sectionId: "projects" },
    { label: stats.certificatesCount, target: "certs", sectionId: "certificates" },
    { label: stats.experienceYears, target: "exp", sectionId: "about" },
    { label: stats.awardsCount, target: "awards", sectionId: "awards" },
  ];

  return (
    <aside
      className="rail-right fixed top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center select-none"
      style={{ right: "var(--gutter)" }}
    >
      {/* Top indicator track — stops 16px before first item */}
      <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-primary/70 mb-4" />

      {/* Vertical Rotated Stats Pills: 48px wide, 12px gap */}
      <div className="flex flex-col items-center gap-3">
        {statsList.map((stat) => {
          const isActive = activeSection === stat.sectionId;

          return (
            <button
              key={stat.label}
              onMouseEnter={playHover}
              onClick={() => {
                const targetEl = document.getElementById(stat.sectionId);
                targetEl?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor="section"
              className={`group flex w-12 items-center justify-center cut-corner-button border px-2 py-3 text-[11px] font-mono tracking-widest transition-all duration-300 ${
                isActive
                  ? "border-primary bg-primary/20 text-primary shadow-[0_0_15px_var(--glow)] font-bold scale-105"
                  : "border-primary/20 bg-bg-secondary/80 text-hud-muted hover:border-primary/60 hover:text-hud-text"
              }`}
            >
              {/* Vertical Rotated Text */}
              <span className="[writing-mode:vertical-rl] rotate-180">
                {stat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom indicator track — stops 16px after last item */}
      <div className="h-16 w-[1px] bg-gradient-to-t from-transparent via-primary/30 to-primary/70 mt-4" />
    </aside>
  );
};
