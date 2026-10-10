"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { CutCard } from "@/components/Common/CutCard";
import { useAudio } from "@/context/AudioContext";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { playClick, playHover, playLaser } = useAudio();

  const [project, setProject] = useState<ProjectItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const found = portfolioData.projects.find((p) => p.id === params.id);
    if (found) {
      setProject(found);
    }
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="font-mono text-primary text-sm animate-pulse">
            // SEARCHING PROJECT DATABASE...
          </div>
          <h2 className="font-display text-2xl text-hud-text">
            PROJECT NOT FOUND
          </h2>
          <Link
            href="/#projects"
            className="cut-corner-button bg-primary px-6 py-3 font-mono text-xs font-bold text-bg inline-block mt-4"
          >
            ← RETURN TO PORTFOLIO
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Ambient Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 cyber-grid opacity-40" />

      {/* Top Navigation Bar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 glass-hud-deep border-b border-primary/20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          <button
            onClick={() => {
              playClick();
              router.push("/#projects");
            }}
            onMouseEnter={playHover}
            className="cut-corner-button border border-primary/40 bg-bg-secondary px-4 py-2 font-mono text-xs text-primary hover:border-primary hover:bg-primary/15 transition-all flex items-center gap-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            BACK TO PROJECTS
          </button>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-primary/60 hidden sm:inline">
              PROJECT // {project.id}
            </span>
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--glow)] animate-pulse" />
          </div>
        </div>
      </motion.header>

      {/* ── HERO BANNER ────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        {/* Hero Background Image */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[60vh]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/50 via-transparent to-bg/50" />

          {/* HUD Corner Decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/40" />
          <div className="absolute bottom-20 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/40" />
          <div className="absolute bottom-20 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40" />

          {/* Scanline Overlay */}
          <div className="absolute inset-0 scanlines opacity-[0.08] pointer-events-none" />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Category & Year Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="cut-corner-button border border-primary/50 bg-primary/15 px-3 py-1.5 font-mono text-[10px] text-primary backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="cut-corner-button border border-primary/30 bg-bg/60 px-3 py-1.5 font-mono text-[10px] text-primary/80 backdrop-blur-sm">
                  {project.year}
                </span>
                <span className="cut-corner-button border border-primary/30 bg-bg/60 px-3 py-1.5 font-mono text-[10px] text-primary/80 backdrop-blur-sm">
                  {project.metrics}
                </span>
              </div>

              {/* Project Title */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-hud-text tracking-wide leading-tight">
                {project.name}
              </h1>

              {/* Tagline */}
              <p className="font-mono text-sm md:text-base text-primary max-w-2xl">
                {project.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ─────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-24 -mt-2">
        {/* ── ROLE & TECH STACK ROW ────────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Role Card */}
          <CutCard
            cutSize={14}
            label="MY ROLE"
            tiltEnabled={false}
            interactive={false}
            innerClassName="p-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 cut-corner-button bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-hud-text">
                    {project.role}
                  </h3>
                  <p className="font-mono text-[10px] text-primary/60">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>
          </CutCard>

          {/* Tech Stack Card */}
          <CutCard
            cutSize={14}
            label="TECH STACK"
            badge={`${project.tech.length} TECHNOLOGIES`}
            tiltEnabled={false}
            interactive={false}
            innerClassName="p-6"
          >
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="cut-corner-button border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[11px] text-primary hover:bg-primary/20 hover:border-primary/60 transition-all cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </CutCard>
        </motion.div>

        {/* ── PROJECT OVERVIEW ─────────────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <CutCard
            cutSize={16}
            label="PROJECT OVERVIEW"
            badge="FULL SPEC"
            tiltEnabled={false}
            interactive={false}
            innerClassName="p-6 md:p-8"
          >
            <div className="space-y-6">
              {/* Short Description */}
              <div>
                <h3 className="font-display text-lg font-bold text-hud-text mb-3 flex items-center gap-2">
                  <span className="inline-block w-1 h-5 bg-primary" />
                  MISSION BRIEF
                </h3>
                <p className="text-sm md:text-base text-hud-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Horizontal Divider */}
              <div className="border-t border-primary/15" />

              {/* Extended Description */}
              <div>
                <h3 className="font-display text-lg font-bold text-hud-text mb-3 flex items-center gap-2">
                  <span className="inline-block w-1 h-5 bg-primary" />
                  DEEP DIVE
                </h3>
                <p className="text-sm md:text-base text-hud-muted leading-[1.8]">
                  {project.extendedDescription}
                </p>
              </div>
            </div>
          </CutCard>
        </motion.div>

        {/* ── FEATURES & CHALLENGES ROW ────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12"
        >
          {/* Key Features - takes 3 cols */}
          <div className="lg:col-span-3">
            <CutCard
              cutSize={14}
              label="KEY FEATURES"
              badge={`${project.features.length} MODULES`}
              tiltEnabled={false}
              interactive={false}
              innerClassName="p-6 md:p-8"
            >
              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.06 }}
                    className="flex items-start gap-3 group/feature"
                  >
                    {/* Feature Index */}
                    <div className="flex-none w-7 h-7 cut-corner-button bg-primary/10 border border-primary/25 flex items-center justify-center font-mono text-[10px] text-primary group-hover/feature:bg-primary/20 group-hover/feature:border-primary/50 transition-all">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm text-hud-muted leading-relaxed pt-0.5 group-hover/feature:text-hud-text transition-colors">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CutCard>
          </div>

          {/* Challenges - takes 2 cols */}
          <div className="lg:col-span-2">
            <CutCard
              cutSize={14}
              label="TECHNICAL CHALLENGES"
              badge="SOLVED"
              tiltEnabled={false}
              interactive={false}
              innerClassName="p-6 md:p-8"
            >
              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    className="relative pl-4 border-l-2 border-primary/30 hover:border-primary/70 transition-colors group/challenge"
                  >
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary/50 rotate-45 group-hover/challenge:bg-primary group-hover/challenge:shadow-[0_0_6px_var(--glow)] transition-all" />
                    <p className="text-sm text-hud-muted leading-relaxed group-hover/challenge:text-hud-text transition-colors">
                      {challenge}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CutCard>
          </div>
        </motion.div>

        {/* ── PROJECT GALLERY ──────────────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <CutCard
            cutSize={16}
            label="PROJECT GALLERY"
            badge={`${project.gallery.length} CAPTURES`}
            tiltEnabled={false}
            interactive={false}
            innerClassName="p-6 md:p-8"
          >
            <div className="space-y-4">
              {/* Main Gallery Image */}
              <div
                className="relative w-full aspect-video overflow-hidden cut-corner-12 border border-primary/30 cursor-pointer group"
                onClick={() => {
                  playLaser();
                  setLightboxOpen(true);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGalleryIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.gallery[activeGalleryIndex]}
                      alt={`${project.name} screenshot ${activeGalleryIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-bg/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="cut-corner-button bg-primary px-5 py-2.5 font-mono text-xs font-bold text-bg">
                    EXPAND VIEW ↗
                  </span>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-3 right-3 cut-corner-button bg-bg/80 border border-primary/30 px-3 py-1.5 font-mono text-[10px] text-primary backdrop-blur-sm">
                  {String(activeGalleryIndex + 1).padStart(2, "0")} /{" "}
                  {String(project.gallery.length).padStart(2, "0")}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      playClick();
                      setActiveGalleryIndex(i);
                    }}
                    onMouseEnter={playHover}
                    className={`relative flex-none w-24 h-16 md:w-32 md:h-20 overflow-hidden cut-corner-button border-2 transition-all ${
                      i === activeGalleryIndex
                        ? "border-primary shadow-[0_0_12px_var(--glow)]"
                        : "border-primary/20 opacity-50 hover:opacity-80 hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 96px, 128px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </CutCard>
        </motion.div>

        {/* ── ACTION FOOTER ────────────────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <CutCard
            cutSize={14}
            tiltEnabled={false}
            interactive={false}
            innerClassName="p-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_var(--glow)] animate-pulse" />
                <span className="font-mono text-xs text-hud-muted">
                  PROJECT STATUS: <span className="text-primary font-bold">PRODUCTION</span>
                </span>
              </div>

              <div className="flex items-center gap-3 flex-wrap justify-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playLaser}
                  onMouseEnter={playHover}
                  className="btn btn--primary"
                >
                  <span className="btn__backdrop" />
                  <span className="relative z-10 flex items-center gap-2">
                    LAUNCH LIVE
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </span>
                </a>

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHover}
                    className="btn btn--secondary"
                  >
                    <span className="btn__backdrop" />
                    <span className="relative z-10 flex items-center gap-2">
                      SOURCE CODE
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </span>
                  </a>
                )}

                <button
                  onClick={() => {
                    playClick();
                    router.push("/#projects");
                  }}
                  onMouseEnter={playHover}
                  className="btn btn--secondary"
                >
                  <span className="btn__backdrop" />
                  <span className="relative z-10">← ALL PROJECTS</span>
                </button>
              </div>
            </div>
          </CutCard>
        </motion.div>
      </div>

      {/* ── FULLSCREEN LIGHTBOX ────────────────────────── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 cut-corner-button border border-primary/40 bg-bg-secondary px-4 py-2 font-mono text-xs text-primary hover:border-primary hover:bg-primary/15 transition-all z-10"
            >
              CLOSE [ESC]
            </button>

            {/* Lightbox Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video cut-corner-12 overflow-hidden border-2 border-primary/40"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.gallery[activeGalleryIndex]}
                alt={`${project.name} fullscreen`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain bg-bg"
              />
            </motion.div>

            {/* Lightbox Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playClick();
                  setActiveGalleryIndex(
                    (prev) =>
                      (prev - 1 + project.gallery.length) %
                      project.gallery.length
                  );
                }}
                className="cut-corner-button border border-primary/40 bg-bg-secondary px-4 py-2 font-mono text-xs text-primary hover:border-primary hover:bg-primary/15 transition-all"
              >
                ← PREV
              </button>

              <span className="font-mono text-xs text-primary/60">
                {String(activeGalleryIndex + 1).padStart(2, "0")} /{" "}
                {String(project.gallery.length).padStart(2, "0")}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playClick();
                  setActiveGalleryIndex(
                    (prev) => (prev + 1) % project.gallery.length
                  );
                }}
                className="cut-corner-button border border-primary/40 bg-bg-secondary px-4 py-2 font-mono text-xs text-primary hover:border-primary hover:bg-primary/15 transition-all"
              >
                NEXT →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
