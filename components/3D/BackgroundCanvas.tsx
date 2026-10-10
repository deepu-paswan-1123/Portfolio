"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

// Floating Particle Dust Field in 3D Space
function ParticleField({ color }: { color: THREE.Color }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
      sc[i] = Math.random() * 0.8 + 0.2;
    }
    return [pos, sc];
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={color}
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Floating Geometric Orbiters (Torus knot, Dodecahedron, Octahedron)
function FloatingGeometries({ color }: { color: THREE.Color }) {
  const mesh1Ref = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (mesh1Ref.current) {
      mesh1Ref.current.rotation.x += delta * 0.2;
      mesh1Ref.current.rotation.y += delta * 0.3;
      mesh1Ref.current.position.y = Math.sin(t * 0.8) * 0.4 + 2;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y += delta * 0.25;
      mesh2Ref.current.rotation.z += delta * 0.15;
      mesh2Ref.current.position.y = Math.cos(t * 0.7) * 0.4 - 2;
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.x += delta * 0.15;
      mesh3Ref.current.rotation.z += delta * 0.2;
      mesh3Ref.current.position.y = Math.sin(t * 0.6 + 2) * 0.5;
    }
  });

  return (
    <group>
      {/* Mesh 1: Torus Knot Wireframe on Left */}
      <mesh ref={mesh1Ref} position={[-6, 2, -4]}>
        <torusKnotGeometry args={[1.2, 0.35, 100, 16]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.25}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Mesh 2: Icosahedron on Right */}
      <mesh ref={mesh2Ref} position={[6.5, -2, -3]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Mesh 3: Octahedron depth anchor */}
      <mesh ref={mesh3Ref} position={[0, -4.5, -6]}>
        <octahedronGeometry args={[2.2, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// Interactive Scroll-Driven Camera Controller & Theme Color Lerper
function SceneRig({ themeMode }: { themeMode: "cyan" | "purple" }) {
  const targetColorRef = useRef(new THREE.Color("#00E5FF"));
  const currentColorRef = useRef(new THREE.Color("#00E5FF"));
  const targetBgRef = useRef(new THREE.Color("#020B0F"));
  const currentBgRef = useRef(new THREE.Color("#020B0F"));

  useEffect(() => {
    if (themeMode === "purple") {
      targetColorRef.current.set("#A855F7");
      targetBgRef.current.set("#050308");
    } else {
      targetColorRef.current.set("#00E5FF");
      targetBgRef.current.set("#020B0F");
    }
  }, [themeMode]);

  useFrame((state, delta) => {
    // Lerp colors smoothly (~0.6s)
    const lerpFactor = Math.min(delta * 4, 1);
    currentColorRef.current.lerp(targetColorRef.current, lerpFactor);
    currentBgRef.current.lerp(targetBgRef.current, lerpFactor);

    // Calculate normalized scroll progress
    const scrollY = window.scrollY || 0;
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Smooth camera path waypoints
    const targetX = Math.sin(scrollProgress * Math.PI * 2) * 2.5;
    const targetY = -scrollProgress * 4 + 0.5;
    const targetZ = 8 - Math.sin(scrollProgress * Math.PI) * 2.5;

    // Smooth camera interpolation
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      targetX,
      0.05
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY,
      0.05
    );
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      targetZ,
      0.05
    );

    state.camera.lookAt(0, targetY * 0.5, 0);

    // Update scene fog
    if (state.scene.fog) {
      (state.scene.fog as THREE.FogExp2).color.copy(currentBgRef.current);
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color={currentColorRef.current}
      />
      <pointLight
        position={[-10, -5, -5]}
        intensity={0.8}
        color={currentColorRef.current}
      />

      <ParticleField color={currentColorRef.current} />
      <FloatingGeometries color={currentColorRef.current} />
    </>
  );
}

export const BackgroundCanvas: React.FC = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ scene }) => {
          scene.fog = new THREE.FogExp2(
            theme === "purple" ? "#050308" : "#020B0F",
            0.04
          );
        }}
      >
        <SceneRig themeMode={theme} />
      </Canvas>
    </div>
  );
};
