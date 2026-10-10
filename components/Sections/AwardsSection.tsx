"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { CutCard } from "@/components/Common/CutCard";
import { portfolioData } from "@/data/portfolioData";

export const AwardsSection: React.FC = () => {
  const { awards } = portfolioData;

  return (
    <section
      id="awards"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          title="INDUSTRY AWARDS & RECOGNITION"
          subtitle="Honors received from international creative bodies for excellence in WebGL design, shader craftsmanship, and innovative interface engineering."
          badge="ACCOLADES MATRIX"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <CutCard
                cutSize={12}
                label={award.badge}
                badge={award.year}
                innerClassName="p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center cut-corner-button border border-primary/40 bg-primary/10 text-primary">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  <h3 className="font-display text-lg font-bold text-hud-text leading-snug">
                    {award.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-primary font-semibold">
                    {award.organization}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-primary/20 flex items-center justify-between font-mono text-[10px] text-hud-muted">
                  <span>{award.category}</span>
                  <span className="text-primary font-bold">{award.year}</span>
                </div>
              </CutCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
