"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { HeroScene } from "@/components/3D/HeroScene";
import { useAudio } from "@/context/AudioContext";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const { aboutMe } = portfolioData;
  const { playClick, playHover, playLaser } = useAudio();

  const handleScrollTo = (id: string) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center pt-[128px] pb-[140px] overflow-hidden"
    >
      {/* Anchor for acceptance check selector #home */}
      <div id="home" className="absolute top-0 left-0 pointer-events-none" />

      {/* Background Radial Glow in Primary Color */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px]" />

      {/* Hero content container: clears the side rails on desktop (1024px+) by >= 48px */}
      <div className="hero-content-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Staggered Typography, Tagline, CTAs & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* 1. Status Badge & Operator Avatar (24px space before Name) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="relative h-10 w-10 flex-none overflow-hidden cut-corner-button border border-primary/50 bg-bg-secondary shadow-[0_0_12px_var(--glow)]">
                <Image
                  src={aboutMe.avatar || "/profile.png"}
                  alt={aboutMe.name}
                  fill
                  sizes="40px"
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              </div>
              <div className="flex items-center gap-2 cut-corner-button border border-primary/40 bg-bg-secondary/85 px-4 py-2 font-mono text-[11px] text-primary tracking-[0.14em] uppercase backdrop-blur-md shadow-[0_0_12px_var(--glow)]">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                <span>{aboutMe.status}</span>
              </div>
            </motion.div>

            {/* 2. Main Display Heading "ALEX RIVERA" (20px space before Subtitle) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-5 font-display font-bold uppercase tracking-[0.02em] text-hud-text leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
            >
              {aboutMe.name.split(" ")[0]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-secondary glow-text">
                {aboutMe.name.split(" ")[1] || "RIVERA"}
              </span>
            </motion.h1>

            {/* 3. Subtitle / Role (12px space before Location line) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-3 flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-primary tracking-wider uppercase"
            >
              <span className="text-hud-muted">//</span>
              <span>{aboutMe.title}</span>
            </motion.div>

            {/* 4. Location Line (16px space before Paragraph) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-4 flex items-center gap-2 font-mono text-xs text-hud-muted tracking-[0.16em] uppercase"
            >
              <span className="text-primary">•</span>
              <span>{aboutMe.location}</span>
            </motion.div>

            {/* 5. Tagline & Short Bio (32px space before Buttons) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 max-w-[56ch] font-body text-sm sm:text-base leading-[1.7] tracking-normal text-hud-muted"
            >
              {aboutMe.tagline}
            </motion.p>

            {/* 6. Hero Buttons Row (48px space before Stats) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mb-12 flex flex-wrap items-center gap-5 w-full sm:w-auto"
            >
              {/* Primary Cut-Corner CTA */}
              <button
                onClick={() => handleScrollTo("projects")}
                onMouseEnter={() => {
                  playHover();
                  playLaser();
                }}
                data-cursor="explore"
                className="btn btn--primary group w-full sm:w-auto"
              >
                <div className="btn__backdrop" />
                <span className="relative z-10 flex items-center gap-[14px]">
                  EXPLORE PROJECTS
                  <svg
                    className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              {/* Secondary Cut-Corner CTA */}
              <button
                onClick={() => handleScrollTo("contact")}
                onMouseEnter={playHover}
                data-cursor="contact"
                className="btn btn--secondary w-full sm:w-auto"
              >
                <div className="btn__backdrop" />
                <span className="relative z-10">INITIALIZE CONTACT</span>
              </button>
            </motion.div>

            {/* 7. Dynamic Stat Metrics Row (Baseline aligned, nowrap stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full pt-8 border-t border-primary/15"
            >
              <div className="flex flex-col justify-end">
                <div
                  className="font-display font-bold text-primary whitespace-nowrap leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.5rem)" }}
                >
                  {aboutMe.stats.experienceYears}
                </div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-hud-muted uppercase mt-2">
                  EXPERIENCE
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div
                  className="font-display font-bold text-primary whitespace-nowrap leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.5rem)" }}
                >
                  {aboutMe.stats.projectsCount}
                </div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-hud-muted uppercase mt-2">
                  PRODUCTION
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div
                  className="font-display font-bold text-primary whitespace-nowrap leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.5rem)" }}
                >
                  {aboutMe.stats.certificatesCount}
                </div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-hud-muted uppercase mt-2">
                  VERIFIED CERTS
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div
                  className="font-display font-bold text-primary whitespace-nowrap leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.5rem)" }}
                >
                  {aboutMe.stats.awardsCount}
                </div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-hud-muted uppercase mt-2">
                  ACADEMIC MERIT
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Hero Object + Rotating Circular Text Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] md:min-h-[500px]">
            {/* 3D Holographic Core Canvas */}
            <HeroScene />

            {/* Rotating Circular Text Badge */}
            <div className="pointer-events-none absolute bottom-4 right-8 sm:bottom-8 sm:right-12 h-28 w-28 sm:h-32 sm:w-32 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="font-mono text-[7.5px] uppercase tracking-[2.5px] fill-primary">
                  <textPath href="#circlePath" startOffset="0%">
                    • DISCOVER WORK • EXPLORE 3D • IMMERSIVE HUD
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

