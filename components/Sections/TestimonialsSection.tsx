"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { CutCard } from "@/components/Common/CutCard";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = portfolioData;

  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          title="CLIENT & TEAM ENDORSEMENTS"
          subtitle="Feedback from engineering leaders, product directors, and creative partners who shipped production WebGL experiences with me."
          badge="COLLABORATION LOGS"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CutCard
                cutSize={14}
                label={`FEEDBACK // ${item.id}`}
                badge="5.0 ★"
                innerClassName="p-6 md:p-8 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-primary mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-3.5 w-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm leading-relaxed text-hud-text italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info & Avatar */}
                <div className="mt-8 pt-4 border-t border-primary/20 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden cut-corner-button border border-primary/40">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-hud-text">
                      {item.author}
                    </h4>
                    <p className="font-mono text-[10px] text-hud-muted">
                      {item.role} // {item.company}
                    </p>
                  </div>
                </div>
              </CutCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
