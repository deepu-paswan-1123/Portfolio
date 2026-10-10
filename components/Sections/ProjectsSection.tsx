"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { CutCard } from "@/components/Common/CutCard";
import { portfolioData } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";
import Image from "next/image";
import Link from "next/link";

export const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { playClick, playHover, playLaser } = useAudio();
  const { projects } = portfolioData;

  const handleNext = () => {
    playClick();
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    playClick();
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleCardClick = (index: number, projectId: string, isCurrent: boolean) => {
    if (!isCurrent) {
      setActiveIndex(index);
      playClick();
    } else {
      playLaser();
      router.push(`/project/${projectId}`);
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          title="FEATURED PRODUCTION WORK"
          subtitle="A curated deck of spatial 3D web applications, neural AI visualizers, and mission-critical HUD interfaces."
          badge="PORTFOLIO GALLERY"
        />

        {/* Interactive Curved 3D Project Stage */}
        <div className="relative mb-12 flex flex-col items-center">
          {/* Main 3D Floating Project Card Showcase */}
          <div className="relative w-full max-w-4xl min-h-[460px] md:min-h-[520px] flex items-center justify-center">
            {projects.map((project, index) => {
              const offset = (index - activeIndex + projects.length) % projects.length;
              const isCurrent = offset === 0;
              const isNext = offset === 1 || offset === -projects.length + 1;
              const isPrev = offset === projects.length - 1 || offset === -1;

              let xPos = 0;
              let scale = 1;
              let zIndex = 30;
              let opacity = 1;
              let rotateY = 0;

              if (isCurrent) {
                xPos = 0;
                scale = 1;
                zIndex = 30;
                opacity = 1;
                rotateY = 0;
              } else if (isNext) {
                xPos = 120;
                scale = 0.88;
                zIndex = 20;
                opacity = 0.45;
                rotateY = -12;
              } else if (isPrev) {
                xPos = -120;
                scale = 0.88;
                zIndex = 20;
                opacity = 0.45;
                rotateY = 12;
              } else {
                xPos = 0;
                scale = 0.7;
                zIndex = 10;
                opacity = 0;
                rotateY = 0;
              }

              return (
                <motion.div
                  key={project.id}
                  animate={{
                    x: `${xPos}%`,
                    scale,
                    opacity,
                    rotateY,
                    zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className="absolute w-full max-w-3xl cursor-pointer"
                  onClick={() => handleCardClick(index, project.id, isCurrent)}
                  data-cursor={isCurrent ? "view" : "select"}
                >
                  <ProjectCard project={project} />
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Navigation Controls */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={handlePrev}
              onMouseEnter={playHover}
              data-cursor="prev"
              aria-label="Previous project"
              className="cut-corner-button border border-primary/40 bg-bg-secondary px-4 py-2 font-mono text-xs text-primary hover:border-primary hover:bg-primary/15 transition-all"
            >
              ← PREV
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5 font-mono text-xs text-hud-muted">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    playClick();
                    setActiveIndex(i);
                  }}
                  className={`h-2 transition-all ${
                    activeIndex === i
                      ? "w-6 bg-primary shadow-[0_0_8px_var(--glow)]"
                      : "w-2 bg-primary/25 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              onMouseEnter={playHover}
              data-cursor="next"
              aria-label="Next project"
              className="cut-corner-button border border-primary/40 bg-bg-secondary px-4 py-2 font-mono text-xs text-primary hover:border-primary hover:bg-primary/15 transition-all"
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Extracted Project Card sub-component ──────────── */
interface ProjectCardProps {
  project: (typeof portfolioData.projects)[number];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { playHover, playLaser } = useAudio();

  return (
    <CutCard
      cutSize={16}
      label={`PROJECT // ${project.id}`}
      badge={project.metrics}
      innerClassName="p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Project Image Preview with Cut-Corner Housing */}
        <div className="md:col-span-6 relative aspect-video w-full overflow-hidden cut-corner-12 border border-primary/30 group">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />

          {/* Hover Overlay CTA */}
          <div className="absolute inset-0 flex items-center justify-center bg-bg/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <span className="cut-corner-button bg-primary px-4 py-2 font-display text-xs font-bold text-bg shadow-[0_0_20px_var(--glow)]">
              VIEW PROJECT SPECS ↗
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-primary mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-black text-hud-text tracking-wide">
              {project.name}
            </h3>

            <p className="mt-1 text-xs font-mono text-primary/80">
              {project.tagline}
            </p>

            <p className="mt-3 text-xs sm:text-sm text-hud-muted leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Tag Pills */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="cut-corner-button border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  playLaser();
                }}
                onMouseEnter={playHover}
                className="cut-corner-button bg-primary px-4 py-2 font-mono text-xs font-bold text-bg transition-all hover:bg-primary-light hover:shadow-[0_0_15px_var(--glow)]"
              >
                LAUNCH LIVE ↗
              </a>

              <Link
                href={`/project/${project.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  playLaser();
                }}
                onMouseEnter={playHover}
                className="cut-corner-button border border-primary/40 bg-bg-secondary px-3 py-2 font-mono text-xs text-primary hover:bg-primary/20 hover:border-primary transition-all"
              >
                SPECS ↗
              </Link>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={playHover}
                  className="cut-corner-button border border-primary/40 bg-bg-secondary px-3 py-2 font-mono text-xs text-hud-muted hover:text-primary hover:border-primary"
                >
                  CODE
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </CutCard>
  );
};

