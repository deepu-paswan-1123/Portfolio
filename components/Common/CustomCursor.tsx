"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "drag" | "text">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect target element data attributes or tags
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const isClickable = target.closest("button, a, [role='button'], .cursor-pointer");

      if (cursorAttr) {
        setCursorType(cursorAttr as typeof cursorType);
        setCursorText(cursorAttr.toUpperCase());
      } else if (isClickable) {
        setCursorType("pointer");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorType === "view" || cursorType === "drag" || Boolean(cursorText);
  const isPointer = cursorType === "pointer";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner precise dot */}
      <motion.div
        className="fixed h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isExpanded ? 0 : isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.1,
        }}
      />

      {/* Trailing Ring with dynamic sizing and text */}
      <motion.div
        className={`fixed flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/70 backdrop-blur-[2px] transition-colors duration-200 ${
          isExpanded
            ? "bg-primary/20 shadow-[0_0_20px_var(--glow)]"
            : isPointer
            ? "bg-primary/10 shadow-[0_0_15px_var(--glow)]"
            : "bg-transparent shadow-[0_0_8px_var(--glow)]"
        }`}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isExpanded ? 64 : isPointer ? 38 : 26,
          height: isExpanded ? 64 : isPointer ? 38 : 26,
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 280,
          mass: 0.2,
        }}
      >
        {isExpanded && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-text">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
