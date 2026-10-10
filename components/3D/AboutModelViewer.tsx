"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";
import { useAudio } from "@/context/AudioContext";

function InteractiveCyberMesh({
  wireframe,
  quality,
  themeMode,
  onUpdateStats,
}: {
  wireframe: boolean;
  quality: "auto" | "low" | "high";
  themeMode: "cyan" | "purple";
  onUpdateStats: (rotX: number, rotY: number) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetColorRef = useRef(new THREE.Color("#00E5FF"));
  const currentColorRef = useRef(new THREE.Color("#00E5FF"));

  const segments = quality === "low" ? 32 : quality === "high" ? 128 : 64;

  useEffect(() => {
    if (themeMode === "purple") {
      targetColorRef.current.set("#A855F7");
    } else {
      targetColorRef.current.set("#00E5FF");
    }
  }, [themeMode]);

  useFrame((_, delta) => {
    const lerpFactor = Math.min(delta * 4, 1);
    currentColorRef.current.lerp(targetColorRef.current, lerpFactor);

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      onUpdateStats(
        Number(meshRef.current.rotation.x.toFixed(2)),
        Number(meshRef.current.rotation.y.toFixed(2))
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.3, 0.45, segments, 24]} />
      <meshStandardMaterial
        color={currentColorRef.current}
        emissive={currentColorRef.current}
        emissiveIntensity={0.4}
        wireframe={wireframe}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export const AboutModelViewer: React.FC = () => {
  const { theme } = useTheme();
  const { isMuted, playHover, playClick } = useAudio();

  const [quality, setQuality] = useState<"auto" | "low" | "high">("auto");
  const [wireframe, setWireframe] = useState(false);
  const [rotStats, setRotStats] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleStatsUpdate = (x: number, y: number) => {
    setRotStats({ x, y });
  };

  return (
    <div
      data-cursor="drag"
      className="group relative flex flex-col overflow-hidden cut-corner-14 border border-primary/40 bg-bg-secondary/90 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.6)]"
    >
      {/* Top Framed HUD Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-primary/20 bg-bg/80 px-4 py-2.5">
        <div className="flex items-center gap-3">
          {/* Corner triangle mark */}
          <span className="text-primary font-mono text-xs">▲</span>
          <span className="font-mono text-xs font-bold tracking-wider text-hud-text">
            SPATIAL CORE // HUD VIEWER
          </span>
          <span className="hidden sm:inline-block cut-corner-button bg-primary/10 border border-primary/30 px-2 py-0.5 font-mono text-[9px] text-primary">
            SYSTEM ONLINE
          </span>
        </div>

        {/* Quality & Wireframe Controls */}
        <div className="flex items-center gap-2">
          {/* Wireframe button */}
          <button
            onClick={() => {
              playClick();
              setWireframe(!wireframe);
            }}
            onMouseEnter={playHover}
            className={`cut-corner-button px-2.5 py-1 font-mono text-[10px] transition-all ${
              wireframe
                ? "bg-primary text-bg font-bold shadow-[0_0_10px_var(--glow)]"
                : "border border-primary/30 bg-bg-secondary text-hud-muted hover:border-primary"
            }`}
          >
            {wireframe ? "WIREFRAME: ON" : "SOLID"}
          </button>

          {/* Quality selector */}
          <div className="flex items-center gap-1 font-mono text-[10px] text-hud-muted">
            <span className="hidden md:inline">RES:</span>
            {(["auto", "low", "high"] as const).map((q) => (
              <button
                key={q}
                onClick={() => {
                  playClick();
                  setQuality(q);
                }}
                onMouseEnter={playHover}
                className={`cut-corner-button px-2 py-0.5 uppercase transition-all ${
                  quality === q
                    ? "border border-primary bg-primary/20 text-primary font-bold shadow-[0_0_8px_var(--glow)]"
                    : "text-hud-muted hover:text-hud-text"
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Canvas Drag Container */}
      <div
        className="relative h-[320px] sm:h-[380px] w-full cursor-grab active:cursor-grabbing select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
      >
        {/* Subtle HUD Crosshairs and Scanlines */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
          <div className="h-[1px] w-48 bg-primary" />
          <div className="absolute h-48 w-[1px] bg-primary" />
        </div>

        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 50 }}
          dpr={[1, quality === "high" ? 2 : 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -2]} intensity={1} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.8}
          />
          <InteractiveCyberMesh
            wireframe={wireframe}
            quality={quality}
            themeMode={theme}
            onUpdateStats={handleStatsUpdate}
          />
        </Canvas>

        {/* Drag Hint Overlay */}
        <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded border border-primary/20 bg-bg/80 px-2.5 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
          <span className="font-mono text-[9px] tracking-wider text-hud-muted uppercase">
            {isDragging ? "ORBITING MESH" : "DRAG / TOUCH TO ROTATE 3D MESH"}
          </span>
        </div>
      </div>

      {/* Bottom Telemetry & Equalizer HUD Bar */}
      <div className="flex items-center justify-between border-t border-primary/20 bg-bg/80 px-4 py-2 text-[10px] font-mono text-hud-muted">
        {/* Telemetry data */}
        <div className="flex items-center gap-4">
          <span>THETA_X: {rotStats.x}</span>
          <span>THETA_Y: {rotStats.y}</span>
          <span className="hidden sm:inline text-primary">60 FPS // LOCKED</span>
        </div>

        {/* Animated Equalizer Bars */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-primary">AUDIO_SYNC</span>
          <div className="flex items-end gap-[2px] h-3">
            {[1, 2, 3, 4, 5].map((bar) => (
              <span
                key={bar}
                className={`w-[2px] bg-primary transition-all duration-300 ${
                  !isMuted
                    ? "animate-pulse"
                    : "opacity-40"
                }`}
                style={{
                  height: !isMuted ? `${(bar * 5) % 12 + 4}px` : "3px",
                  animationDelay: `${bar * 120}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
