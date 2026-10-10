"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  align = "left",
  badge,
}) => {
  const alignmentClass =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${alignmentClass}`}>
      {/* Top HUD Meta Label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary">
          // {number}
        </span>
        {badge && (
          <span className="cut-corner-button border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
            {badge}
          </span>
        )}
      </div>

      {/* Main Uppercase Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display text-3xl font-extrabold uppercase tracking-tight text-hud-text sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {/* Animated Glowing Underline */}
      <div className="relative mt-4 h-[2px] w-32 bg-primary/20 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-full w-full bg-gradient-to-r from-primary via-primary-light to-transparent"
        />
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 h-full w-12 bg-white/80 blur-[2px]"
        />
      </div>

      {/* Subtitle / Description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-hud-muted md:text-base"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
