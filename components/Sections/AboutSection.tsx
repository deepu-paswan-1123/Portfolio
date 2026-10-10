"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { CutCard } from "@/components/Common/CutCard";
import { AboutModelViewer } from "@/components/3D/AboutModelViewer";
import { portfolioData } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";

export const AboutSection: React.FC = () => {
  const { aboutMe } = portfolioData;
  const { playClick, playHover, playLaser } = useAudio();

  const handleScrollTo = (id: string) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          title="ABOUT THE ARCHITECT"
          subtitle="Engineering bespoke enterprise architectures, high-performance .NET Web APIs, and AI-powered full-stack ecosystems."
          badge="IDENTITY MATRIX"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Biometric Dossier & Portrait Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <CutCard
              label="01 // OPERATOR BIOMETRICS"
              cutSize={16}
              badge="VERIFIED DEVELOPER"
              innerClassName="p-6 sm:p-7 flex flex-col gap-5"
            >
              {/* Futuristic Cyber Frame with User Portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden cut-corner-14 border-2 border-primary/40 group shadow-[0_0_25px_rgba(0,229,255,0.15)] bg-bg-secondary">
                <Image
                  src={aboutMe.avatar || "/profile.png"}
                  alt={aboutMe.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Holographic Scanline & Vignette Overlays */}
                <div className="absolute inset-0 scanlines opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30 opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40 pointer-events-none" />

                {/* HUD Corner Coordinate Brackets */}
                <span className="pointer-events-none absolute top-2.5 left-2.5 font-mono text-[9px] text-primary tracking-widest bg-bg/70 px-1.5 py-0.5 cut-corner-button border border-primary/30 backdrop-blur-sm">
                  ⌜ ID: DP-2026
                </span>
                <span className="pointer-events-none absolute top-2.5 right-2.5 font-mono text-[9px] text-primary tracking-widest bg-bg/70 px-1.5 py-0.5 cut-corner-button border border-primary/30 backdrop-blur-sm">
                  SEC-LVL 5 ⌝
                </span>
                <span className="pointer-events-none absolute bottom-16 left-2.5 font-mono text-[9px] text-hud-muted tracking-widest bg-bg/70 px-1.5 py-0.5 backdrop-blur-sm">
                  ⌞ LOC: 28.01°N / 73.31°E
                </span>
                <span className="pointer-events-none absolute bottom-16 right-2.5 font-mono text-[9px] text-emerald-400 tracking-widest bg-bg/70 px-1.5 py-0.5 backdrop-blur-sm">
                  LIVE ⌟
                </span>

                {/* Bottom Biometric HUD Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 cut-corner-10 bg-bg/90 border border-primary/50 backdrop-blur-md shadow-[0_0_15px_var(--glow)]">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-display text-sm sm:text-base font-bold text-hud-text tracking-wider uppercase">
                        {aboutMe.name}
                      </div>
                      <div className="font-mono text-[10px] text-primary font-semibold tracking-wider">
                        FULL-STACK DEVELOPER
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 cut-corner-button bg-primary/15 border border-primary/40 px-2 py-1">
                      <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                      <span className="font-mono text-[9px] text-primary font-bold">ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Telemetry Metadata Matrix */}
              <div className="pt-2 border-t border-primary/20 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-primary/10">
                  <span className="text-hud-muted">EXPERIENCE:</span>
                  <span className="text-primary font-bold">{aboutMe.stats.experienceYears} PRODUCTION</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-primary/10">
                  <span className="text-hud-muted">STACK:</span>
                  <span className="text-hud-text font-bold">.NET CORE + MERN</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-primary/10">
                  <span className="text-hud-muted">ACADEMIC:</span>
                  <span className="text-hud-text font-bold">B.TECH CSE ({aboutMe.stats.awardsCount})</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-hud-muted">LOCATION:</span>
                  <span className="text-primary font-semibold">{aboutMe.location}</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-3 border-t border-primary/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={aboutMe.contact.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  data-cursor="resume"
                  className="flex-1 cut-corner-button border border-primary/50 bg-primary/15 py-2.5 px-3 text-center font-mono text-xs font-bold text-primary transition-all hover:bg-primary hover:text-bg hover:shadow-[0_0_15px_var(--glow)]"
                >
                  DOWNLOAD RESUME (PDF) ↗
                </a>

                <button
                  onClick={() => handleScrollTo("contact")}
                  onMouseEnter={playHover}
                  data-cursor="contact"
                  className="cut-corner-button border border-primary/30 bg-bg-secondary py-2.5 px-4 font-mono text-xs text-hud-muted hover:text-primary hover:border-primary transition-all"
                >
                  TRANSMIT →
                </button>
              </div>
            </CutCard>
          </div>

          {/* Right Column: Bio, Architectural Principles & 3D Spatial Core */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Primary Bio CutCard */}
            <CutCard
              label="02 // ARCHITECTURAL DOSSIER"
              cutSize={14}
              badge="PROFILE BRIEF"
            >
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-hud-muted">
                <p>
                  Hello, I&apos;m{" "}
                  <span className="text-hud-text font-bold text-primary">
                    {aboutMe.name}
                  </span>
                  , a {aboutMe.title} based in {aboutMe.location}.
                </p>
                <p>{aboutMe.shortBio}</p>
                <p>{aboutMe.extendedBio}</p>
              </div>
            </CutCard>

            {/* Architectural Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CutCard label="CORE // 01" cutSize={10} showSparkle={false}>
                <h3 className="font-display text-sm font-bold text-hud-text uppercase">
                  .NET & ENTERPRISE APIS
                </h3>
                <p className="mt-2 text-xs text-hud-muted leading-relaxed">
                  High-throughput C# .NET Core RESTful APIs, repository patterns, SQL Server SSMS optimization, and dependency injection.
                </p>
              </CutCard>

              <CutCard label="CORE // 02" cutSize={10} showSparkle={false}>
                <h3 className="font-display text-sm font-bold text-hud-text uppercase">
                  MERN & AI INTEGRATION
                </h3>
                <p className="mt-2 text-xs text-hud-muted leading-relaxed">
                  Modular Angular & React interfaces, real-time WebSocket pipelines, and automated OpenAI intelligent booking agents.
                </p>
              </CutCard>
            </div>

            {/* Framed 3D HUD Model Viewer Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AboutModelViewer />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
