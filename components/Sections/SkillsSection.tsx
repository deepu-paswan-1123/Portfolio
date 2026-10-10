"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { CutCard } from "@/components/Common/CutCard";
import { SkillConstellation3D } from "@/components/3D/SkillConstellation3D";
import { portfolioData, SkillItem } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";

const CATEGORIES = [
  "ALL NODES",
  "3D & Graphics",
  "Frontend & Architecture",
  "Animation & FX",
  "Backend & Cloud",
  "Design Systems",
] as const;

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL NODES");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const { playClick, playHover } = useAudio();

  const filteredSkills =
    selectedCategory === "ALL NODES"
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          title="TECHNICAL EXPERTISE & 3D CLOUD"
          subtitle="Explore the interactive 3D skill constellation below. Hover nodes or filter categories to inspect neural proficiency and tech stack capabilities."
          badge="SPATIAL CAPABILITIES"
        />

        {/* 3D Orbiting Constellation Canvas + Live HUD Detail Overlay */}
        <div className="relative mb-12 cut-corner-14 border border-primary/30 bg-bg-secondary/70 backdrop-blur-xl p-4 md:p-6 overflow-hidden">
          {/* Top HUD status bar */}
          <div className="flex items-center justify-between border-b border-primary/20 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-primary font-bold">
                ORBITAL CONSTELLATION
              </span>
              <span className="font-mono text-[10px] text-hud-muted">
                // {portfolioData.skills.length} ACTIVE NODES
              </span>
            </div>

            {/* Hovered Skill HUD readout */}
            <div className="font-mono text-xs text-primary">
              {hoveredSkill ? (
                <span className="animate-pulse">
                  INSPECTING: {hoveredSkill.name} [{hoveredSkill.proficiency}%]
                </span>
              ) : (
                <span className="text-hud-muted">HOVER NODE TO INSPECT</span>
              )}
            </div>
          </div>

          {/* 3D Skill Constellation Canvas */}
          <SkillConstellation3D onHoverSkill={setHoveredSkill} />

          {/* Hover Detail Floating HUD Box */}
          <AnimatePresence>
            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 pointer-events-none"
              >
                <div className="cut-corner-button border border-primary bg-bg/95 p-4 shadow-[0_0_20px_var(--glow)]">
                  <div className="flex items-center justify-between text-xs font-mono text-primary mb-1">
                    <span>{hoveredSkill.category}</span>
                    <span>{hoveredSkill.proficiency}% MASTERY</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-hud-text">
                    {hoveredSkill.name}
                  </h4>
                  <p className="mt-1 text-xs text-hud-muted">
                    {hoveredSkill.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={playHover}
                data-cursor="filter"
                className={`cut-corner-button px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "border border-primary bg-primary text-bg font-bold shadow-[0_0_15px_var(--glow)]"
                    : "border border-primary/20 bg-bg-secondary/80 text-hud-muted hover:border-primary/50 hover:text-hud-text"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* CutCard Skills Grid with Proficiency HUD Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <CutCard
                label={`NODE // 0${index + 1}`}
                badge={skill.category}
                cutSize={12}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-hud-text">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs font-bold text-primary">
                    {skill.proficiency}%
                  </span>
                </div>

                <p className="text-xs text-hud-muted leading-relaxed mb-4">
                  {skill.desc}
                </p>

                {/* Cyber HUD Proficiency Bar */}
                <div className="w-full bg-bg border border-primary/20 p-0.5 cut-corner-button">
                  <div
                    className="h-1.5 bg-gradient-to-r from-primary-deep via-primary to-primary-light transition-all duration-700 shadow-[0_0_10px_var(--glow)]"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </CutCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
