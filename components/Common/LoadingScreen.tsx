"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [systemLogs, setSystemLogs] = useState<string[]>([
    "INITIALIZING CORE NEURAL ENGINE...",
  ]);

  useEffect(() => {
    const logsSequence = [
      { at: 15, msg: "MOUNTING 3D WEBGL SHADER PIPELINE..." },
      { at: 35, msg: "FETCHING HIGH-DENSITY SPATIAL NODES..." },
      { at: 60, msg: "COMPILING DUAL-THEME COLOR BUFFERS..." },
      { at: 80, msg: "SYNCHRONIZING LENIS SCROLL TICKER..." },
      { at: 95, msg: "CALIBRATING HUD INTERFACES..." },
      { at: 100, msg: "SYSTEM ONLINE. ENTERING MATRIX." },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 400);
          return 100;
        }

        const increment = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(100, prev + increment);

        const foundLog = logsSequence.find(
          (l) => prev < l.at && next >= l.at
        );
        if (foundLog) {
          setSystemLogs((logs) => [...logs.slice(-3), foundLog.msg]);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg px-6 select-none"
        >
          {/* Cyber Grid Background */}
          <div className="absolute inset-0 opacity-10 cyber-grid" />

          {/* Central Holographic Spinner & Progress Badge */}
          <div className="relative z-10 flex flex-col items-center max-w-md w-full">
            {/* Spinning Polygonal HUD Ring */}
            <div className="relative mb-8 h-24 w-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute inset-2 cut-corner-12 border border-primary/60 animate-pulse shadow-[0_0_20px_var(--glow)]" />
              <span className="font-display text-2xl font-black text-primary">
                {progress}%
              </span>
            </div>

            {/* Title / Identity */}
            <div className="text-center mb-6">
              <h1 className="font-display text-lg font-bold tracking-widest text-hud-text uppercase">
                ALEX RIVERA // 3D PORTFOLIO
              </h1>
              <p className="font-mono text-xs text-primary/80 mt-1">
                IMMERSIVE DUAL-THEME EXPERIENCE
              </p>
            </div>

            {/* Progress Bar with Cut-Corner Housing */}
            <div className="w-full cut-corner-button border border-primary/40 bg-bg-secondary p-1">
              <div
                className="h-2 bg-gradient-to-r from-primary-deep via-primary to-primary-light transition-all duration-100 ease-out shadow-[0_0_12px_var(--glow)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Live Terminal Telemetry Logs */}
            <div className="mt-4 w-full font-mono text-[11px] text-hud-muted space-y-1 text-center">
              {systemLogs.map((log, i) => (
                <div key={i} className="tracking-wide">
                  <span className="text-primary mr-1">&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
