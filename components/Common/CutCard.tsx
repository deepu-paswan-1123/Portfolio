"use client";

import React, { useRef, useState } from "react";
import { useAudio } from "@/context/AudioContext";

export interface CutCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  cutSize?: 10 | 12 | 14 | 16 | "asymmetric";
  label?: string;
  showSparkle?: boolean;
  tiltEnabled?: boolean;
  glowOnHover?: boolean;
  scanlines?: boolean;
  onClick?: () => void;
  interactive?: boolean;
  badge?: string;
}

export const CutCard: React.FC<CutCardProps> = ({
  children,
  className = "",
  innerClassName = "",
  cutSize = 12,
  label,
  showSparkle = true,
  tiltEnabled = true,
  glowOnHover = true,
  scanlines = true,
  onClick,
  interactive = true,
  badge,
}) => {
  const { playHover } = useAudio();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Generate dynamic polygon clip-path string
  const getClipPath = (size: typeof cutSize) => {
    if (size === "asymmetric") {
      return "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)";
    }
    const s = size || 12;
    return `polygon(${s}px 0, calc(100% - ${s}px) 0, 100% ${s}px, 100% calc(100% - ${s}px), calc(100% - ${s}px) 100%, ${s}px 100%, 0 calc(100% - ${s}px), 0 ${s}px)`;
  };

  const clipPathStyle = {
    clipPath: getClipPath(cutSize),
    WebkitClipPath: getClipPath(cutSize),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (interactive) playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: tiltEnabled
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? "6px" : "0px"})`
          : undefined,
        transition: isHovered
          ? "transform 0.1s ease-out, filter 0.3s ease"
          : "transform 0.4s ease-out, filter 0.3s ease",
      }}
      className={`group relative ${interactive ? "cursor-pointer" : ""} ${
        glowOnHover && isHovered ? "drop-shadow-[0_0_20px_var(--glow)]" : ""
      } ${className}`}
    >
      {/* Outer Border Layer (1px border simulation via gradient + clip-path) */}
      <div
        style={clipPathStyle}
        className={`p-[1px] transition-all duration-300 ${
          isHovered
            ? "bg-gradient-to-br from-primary via-primary-light to-primary-secondary shadow-[0_0_25px_var(--glow)]"
            : "bg-gradient-to-br from-primary/40 via-primary/10 to-primary/30"
        }`}
      >
        {/* Inner Content Layer (with same clip-path and dark theme background) */}
        <div
          style={clipPathStyle}
          className={`relative overflow-hidden bg-bg-secondary/90 backdrop-blur-xl p-6 transition-colors duration-300 ${innerClassName}`}
        >
          {/* Subtle Grid or Scanline texture */}
          {scanlines && (
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] bg-[size:16px_16px]" />
          )}

          {/* Light sweep animation on hover */}
          <div className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-primary/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[250%]" />

          {/* Top Header Bar inside Card: Mono Label & Sparkle */}
          {(label || showSparkle || badge) && (
            <div className="relative z-10 mb-4 flex items-center justify-between text-xs">
              {label ? (
                <span className="font-mono text-[10px] tracking-widest text-primary/80 uppercase">
                  {label}
                </span>
              ) : (
                <span />
              )}

              <div className="flex items-center gap-2">
                {badge && (
                  <span className="cut-corner-button border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[9px] text-primary">
                    {badge}
                  </span>
                )}

                {showSparkle && (
                  <svg
                    className={`h-3.5 w-3.5 text-primary transition-transform duration-500 ${
                      isHovered ? "rotate-90 scale-125 text-primary-light" : "opacity-60"
                    }`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                )}
              </div>
            </div>
          )}

          {/* Main Card Content */}
          <div className="relative z-10">{children}</div>

          {/* Corner Notch Decorative Elements (Sci-Fi HUD marks) */}
          <div className="pointer-events-none absolute bottom-1 right-2 font-mono text-[8px] tracking-tighter text-primary/30 select-none">
            ◤ ◢
          </div>
        </div>
      </div>
    </div>
  );
};
