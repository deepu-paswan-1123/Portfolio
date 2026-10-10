"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

function HolographicCore({ themeMode }: { themeMode: "cyan" | "purple" }) {
  const outerGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeCageRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  const targetColorRef = useRef(new THREE.Color("#00E5FF"));
  const currentColorRef = useRef(new THREE.Color("#00E5FF"));
  const targetLightColorRef = useRef(new THREE.Color("#67E8F9"));
  const currentLightColorRef = useRef(new THREE.Color("#67E8F9"));

  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (themeMode === "purple") {
      targetColorRef.current.set("#A855F7");
      targetLightColorRef.current.set("#C4B5FD");
    } else {
      targetColorRef.current.set("#00E5FF");
      targetLightColorRef.current.set("#67E8F9");
    }
  }, [themeMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const lerpFactor = Math.min(delta * 4, 1);

    currentColorRef.current.lerp(targetColorRef.current, lerpFactor);
    currentLightColorRef.current.lerp(targetLightColorRef.current, lerpFactor);

    // Mouse parallax & tilt response
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.y,
        mousePos.current.x * 0.4 + t * 0.15,
        0.05
      );
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        mousePos.current.y * 0.4,
        0.05
      );
      outerGroupRef.current.position.y = Math.sin(t * 1.2) * 0.15;
    }

    // Inner glowing core rotation
    if (coreRef.current) {
      coreRef.current.rotation.x -= delta * 0.4;
      coreRef.current.rotation.z += delta * 0.3;
    }

    // Outer wireframe cage counter-rotation
    if (wireframeCageRef.current) {
      wireframeCageRef.current.rotation.y += delta * 0.25;
      wireframeCageRef.current.rotation.z -= delta * 0.15;
    }

    // Gyroscopic Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.3;
      ring2Ref.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group ref={outerGroupRef}>
      {/* Central Solid Pulsing Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color={currentColorRef.current}
          emissive={currentColorRef.current}
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Holographic Wireframe Icosahedron */}
      <mesh ref={wireframeCageRef}>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshStandardMaterial
          color={currentLightColorRef.current}
          wireframe
          transparent
          opacity={0.4}
          emissive={currentColorRef.current}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Orbiting Gyroscope Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshBasicMaterial
          color={currentColorRef.current}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Orbiting Gyroscope Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshBasicMaterial
          color={currentLightColorRef.current}
          transparent
          opacity={0.45}
        />
      </mesh>
    </group>
  );
}

export const HeroScene: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative h-full w-full max-lg:opacity-35">
      <Canvas
        camera={{ position: [2.5, 0, 6.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -3]} intensity={1} />
        <HolographicCore themeMode={theme} />
      </Canvas>
    </div>
  );
};
