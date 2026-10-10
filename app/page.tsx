"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { LoadingScreen } from "@/components/Common/LoadingScreen";
import { BackgroundCanvas } from "@/components/3D/BackgroundCanvas";
import { TopBar } from "@/components/Navigation/TopBar";
import { LeftRail } from "@/components/Navigation/LeftRail";
import { RightRail } from "@/components/Navigation/RightRail";
import { BottomNav } from "@/components/Navigation/BottomNav";

import { HeroSection } from "@/components/Sections/HeroSection";
import { AboutSection } from "@/components/Sections/AboutSection";
import { SkillsSection } from "@/components/Sections/SkillsSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { CertificatesSection } from "@/components/Sections/CertificatesSection";
import { TestimonialsSection } from "@/components/Sections/TestimonialsSection";
import { AwardsSection } from "@/components/Sections/AwardsSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import { AIAssistantModal } from "@/components/AI/AIAssistantModal";
import { FloatingAITrigger } from "@/components/AI/FloatingAITrigger";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Sci-Fi Loading Screen Boot Sequence */}
      <LoadingScreen onComplete={() => setIsLoaded(true)} />

      {/* Fixed Fullscreen 3D Background Canvas */}
      <BackgroundCanvas />

      {/* Main App Scaffolding */}
      <div
        className={`relative z-10 flex min-h-screen flex-col transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Top Header Navigation */}
        <TopBar onOpenAI={() => setAiModalOpen(true)} />

        {/* Desktop Side Rails */}
        <LeftRail />
        <RightRail />

        {/* Page Sections (Exact reference order) */}
        <main className="flex-1 w-full flex flex-col">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <TestimonialsSection />
          <AwardsSection />
          <ContactSection />
        </main>

        {/* Floating Quick AI Assistant Orb */}
        <FloatingAITrigger onOpen={() => setAiModalOpen(true)} />

        {/* Bottom Floating Glass Navigation with Sound Toggle */}
        <BottomNav />

        {/* Interactive Cybernetic AI Assistant Modal */}
        <AIAssistantModal
          isOpen={aiModalOpen}
          onClose={() => setAiModalOpen(false)}
        />
      </div>
    </>
  );
}

