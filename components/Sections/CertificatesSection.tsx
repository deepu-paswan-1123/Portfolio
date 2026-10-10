"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { CutCard } from "@/components/Common/CutCard";
import { portfolioData } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";

export const CertificatesSection: React.FC = () => {
  const [isFanned, setIsFanned] = useState(false);
  const { certificates } = portfolioData;
  const { playHover, playLaser } = useAudio();

  return (
    <section
      id="certificates"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          title="CERTIFICATES & ACCREDITATIONS"
          subtitle="Verified master certifications in WebGL, Three.js shaders, cloud architectures, and modern React design systems. Hover the deck below to fan out all credentials."
          badge="VERIFIED CREDENTIALS"
        />

        {/* Interactive Fanning Card Deck Container */}
        <div
          onMouseEnter={() => {
            setIsFanned(true);
            playLaser();
          }}
          onMouseLeave={() => setIsFanned(false)}
          className="relative mb-16 flex flex-col items-center justify-center min-h-[380px] select-none"
        >
          {/* Deck Header Hint */}
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
            <span>
              {isFanned
                ? "DECK EXPANDED // SELECT CREDENTIAL"
                : "HOVER TO FAN OUT CERTIFICATE DECK"}
            </span>
          </div>

          {/* Fanning Stack of CutCard items */}
          <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
            {certificates.map((cert, index) => {
              const count = certificates.length;
              const angleOffset = isFanned
                ? (index - (count - 1) / 2) * 9
                : (index - (count - 1) / 2) * 2;
              const xOffset = isFanned
                ? (index - (count - 1) / 2) * 65
                : index * 3;
              const yOffset = isFanned
                ? Math.abs(index - (count - 1) / 2) * 8
                : index * -4;

              return (
                <motion.div
                  key={cert.id}
                  animate={{
                    rotate: angleOffset,
                    x: xOffset,
                    y: yOffset,
                    scale: isFanned ? 1 : 0.95,
                    zIndex: index + 10,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 25 }}
                  className="absolute w-full max-w-md cursor-pointer"
                  onMouseEnter={playHover}
                  data-cursor="cert"
                >
                  <CutCard
                    cutSize={12}
                    label={`ID: ${cert.credentialId}`}
                    badge={cert.date}
                    innerClassName="p-5"
                  >
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-primary uppercase">
                          {cert.issuer}
                        </div>
                        <h3 className="font-display text-base font-bold text-hud-text mt-0.5">
                          {cert.title}
                        </h3>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="cut-corner-button border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] text-primary"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CutCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detailed Grid of All Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <CutCard
                cutSize={12}
                label={`CERTIFICATE // ${cert.id}`}
                badge={cert.date}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-xs text-primary font-bold">
                      {cert.issuer}
                    </span>
                    <h3 className="font-display text-lg font-bold text-hud-text mt-1">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-[11px] text-hud-muted mt-1">
                      REG: {cert.credentialId}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="cut-corner-button border border-primary/25 bg-bg-secondary px-2 py-0.5 font-mono text-[10px] text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-primary/20 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-hud-muted">
                      STATUS: ACTIVE & VERIFIED
                    </span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="cut-corner-button bg-primary/15 border border-primary/40 px-3 py-1 font-mono text-[11px] text-primary hover:bg-primary hover:text-bg transition-all"
                    >
                      VERIFY ↗
                    </a>
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
