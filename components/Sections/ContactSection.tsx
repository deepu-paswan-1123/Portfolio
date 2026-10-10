"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { CutCard } from "@/components/Common/CutCard";
import { portfolioData } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";

export const ContactSection: React.FC = () => {
  const { contact, status, name, title } = portfolioData.aboutMe;
  const { playClick, playHover, playSuccess, playLaser } = useAudio();

  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    projectType: "3D Web Application",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccess();
    setFormSent(true);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          title="INITIALIZE DIRECT PROTOCOL"
          subtitle="Ready to build an award-winning 3D web experience or discuss a senior engineering engagement? Send a transmission below."
          badge="SECURE CHANNEL"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Big Cut-Corner Terminal & Copy Email Hub */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <CutCard
              cutSize={16}
              label="TRANSMISSION HUB // 01"
              badge="READY"
              innerClassName="p-6 md:p-8"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-black text-hud-text">
                LET&apos;S ENGINEER SOMETHING EXCEPTIONAL
              </h3>

              <p className="mt-3 text-sm text-hud-muted leading-relaxed">
                Whether you need a cutting-edge WebGL 3D experience, custom GLSL visualizers, or high-performance React architecture, my inbox is open for high-impact projects.
              </p>

              {/* Instant Copy Email Cut-Corner CTA */}
              <div className="mt-8">
                <div className="font-mono text-xs text-primary/80 mb-2">
                  DIRECT EMAIL FREQUENCY:
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex-1 cut-corner-button border border-primary/40 bg-bg px-4 py-3 font-mono text-xs sm:text-sm text-primary">
                    {contact.email}
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    onMouseEnter={playHover}
                    data-cursor="copy"
                    className={`cut-corner-button px-5 py-3 font-mono text-xs font-bold transition-all duration-300 ${
                      copied
                        ? "bg-emerald-400 text-bg shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                        : "bg-primary text-bg hover:bg-primary-light hover:shadow-[0_0_15px_var(--glow)]"
                    }`}
                  >
                    {copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL"}
                  </button>
                </div>
              </div>

              {/* Status and Direct Contact Grid */}
              <div className="mt-8 pt-6 border-t border-primary/20 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <div className="font-mono text-[10px] text-hud-muted uppercase">
                    CURRENT STATUS
                  </div>
                  <div className="font-mono text-xs text-primary font-bold mt-1">
                    {status}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] text-hud-muted uppercase">
                    MOBILE / PHONE
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="font-mono text-xs text-hud-text hover:text-primary mt-1 block"
                  >
                    {contact.phone}
                  </a>
                </div>

                <div>
                  <div className="font-mono text-[10px] text-hud-muted uppercase">
                    LIVE PORTFOLIO
                  </div>
                  <a
                    href={contact.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHover}
                    className="font-mono text-xs text-primary underline mt-1 block"
                  >
                    dpportfolio87.netlify.app ↗
                  </a>
                </div>
              </div>
            </CutCard>

            {/* Social Network Node Tiles */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "GITHUB", url: contact.github, label: "REPOS" },
                { name: "PORTFOLIO", url: contact.portfolioUrl, label: "NETLIFY" },
                { name: "DIRECT EMAIL", url: `mailto:${contact.email}`, label: "GMAIL" },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="cut-corner-button border border-primary/30 bg-bg-secondary/80 p-3 text-center transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_var(--glow)]"
                >
                  <div className="font-display text-xs font-bold text-hud-text">
                    {soc.name}
                  </div>
                  <div className="font-mono text-[9px] text-primary/70">
                    {soc.label} ↗
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Interactive Message Terminal Form */}
          <div className="lg:col-span-6">
            <CutCard
              cutSize={16}
              label="DISPATCH FORM // 02"
              badge="ENCRYPTED"
              innerClassName="p-6 md:p-8"
            >
              {formSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center cut-corner-12 border border-primary bg-primary/20 text-primary shadow-[0_0_25px_var(--glow)]">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="font-display text-xl font-bold text-hud-text">
                    TRANSMISSION TRANSMITTED
                  </h4>
                  <p className="mt-2 text-xs font-mono text-hud-muted">
                    Thank you, {formData.senderName || "Operator"}. I will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormData({
                        senderName: "",
                        senderEmail: "",
                        projectType: "3D Web Application",
                        message: "",
                      });
                    }}
                    className="mt-6 cut-corner-button border border-primary/40 bg-bg px-4 py-2 font-mono text-xs text-primary"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-hud-muted mb-1 uppercase">
                      NAME / CALLSIGN
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.senderName}
                      onChange={(e) =>
                        setFormData({ ...formData, senderName: e.target.value })
                      }
                      placeholder="e.g. John Doe / NeoCorp"
                      className="w-full cut-corner-button border border-primary/30 bg-bg px-4 py-2.5 font-mono text-xs text-hud-text placeholder:text-hud-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-hud-muted mb-1 uppercase">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.senderEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, senderEmail: e.target.value })
                      }
                      placeholder="e.g. contact@domain.com"
                      className="w-full cut-corner-button border border-primary/30 bg-bg px-4 py-2.5 font-mono text-xs text-hud-text placeholder:text-hud-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-hud-muted mb-1 uppercase">
                      PROJECT CLASSIFICATION
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full cut-corner-button border border-primary/30 bg-bg px-4 py-2.5 font-mono text-xs text-hud-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="3D Web Application">3D Web Application / WebGL</option>
                      <option value="AI HUD & Visualizer">AI HUD & Data Visualizer</option>
                      <option value="Senior Frontend Engineering">Senior Frontend Engineering</option>
                      <option value="Design System & Architecture">Design System & Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-hud-muted mb-1 uppercase">
                      MESSAGE TRANSMISSION
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe project scope, timeline, and requirements..."
                      className="w-full cut-corner-button border border-primary/30 bg-bg px-4 py-2.5 font-mono text-xs text-hud-text placeholder:text-hud-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => {
                      playHover();
                      playLaser();
                    }}
                    data-cursor="send"
                    className="w-full cut-corner-button bg-primary py-3.5 font-display text-xs font-bold uppercase tracking-wider text-bg shadow-[0_0_20px_var(--glow)] transition-all hover:bg-primary-light"
                  >
                    DISPATCH TRANSMISSION →
                  </button>
                </form>
              )}
            </CutCard>
          </div>
        </div>

        {/* Bottom Sci-Fi Copyright & Closing Sign-Off */}
        <div className="mt-20 pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-hud-muted">
          <div>
            © {new Date().getFullYear()} {name.toUpperCase()} // {title.toUpperCase()}
          </div>
          <div className="flex items-center gap-2 text-primary text-[10px]">
            <span>SYSTEM TERMINAL: ACTIVE</span>
            <span>•</span>
            <span>DUAL-THEME KERNEL 2.6</span>
          </div>
        </div>
      </div>
    </section>
  );
};
