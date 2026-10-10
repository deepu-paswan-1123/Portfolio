"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData, SkillItem } from "@/data/portfolioData";
import { useAudio } from "@/context/AudioContext";

interface NodeProps {
  skill: SkillItem;
  position: [number, number, number];
  themeColor: THREE.Color;
  onHover: (skill: SkillItem | null) => void;
}

function SkillNode({ skill, position, themeColor, onHover }: NodeProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const { playHover } = useAudio();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (hovered ? 1.5 : 0.4);
      meshRef.current.rotation.y += delta * (hovered ? 1.5 : 0.6);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Central Geometric Node */}
        <mesh
          ref={meshRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            playHover();
            onHover(skill);
          }}
          onPointerOut={() => {
            setHovered(false);
            onHover(null);
          }}
        >
          <octahedronGeometry args={[hovered ? 0.35 : 0.22, 0]} />
          <meshStandardMaterial
            color={hovered ? "#ffffff" : themeColor}
            emissive={themeColor}
            emissiveIntensity={hovered ? 1.5 : 0.6}
            roughness={0.1}
          />
        </mesh>

        {/* Outer Orbiting Ring on Hover */}
        {hovered && (
          <mesh>
            <ringGeometry args={[0.45, 0.48, 32]} />
            <meshBasicMaterial color={themeColor} side={THREE.DoubleSide} />
          </mesh>
        )}

        {/* Skill Text Label */}
        <Text
          position={[0, -0.45, 0]}
          fontSize={0.18}
          color={hovered ? "#ffffff" : "#c4b5fd"}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.015}
          outlineColor="#020b0f"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}

// Connected Constellation Lines
function ConstellationLines({
  positions,
  color,
}: {
  positions: [number, number, number][];
  color: THREE.Color;
}) {
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = new THREE.Vector3(...positions[i]).distanceTo(
          new THREE.Vector3(...positions[j])
        );
        if (dist < 4.2) {
          points.push(new THREE.Vector3(...positions[i]));
          points.push(new THREE.Vector3(...positions[j]));
        }
      }
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, [positions]);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={0.25}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

function ConstellationOrbit({
  onHover,
  themeMode,
}: {
  onHover: (s: SkillItem | null) => void;
  themeMode: "cyan" | "purple";
}) {
  const groupRef = useRef<THREE.Group>(null);
  const targetColorRef = useRef(new THREE.Color("#00E5FF"));
  const currentColorRef = useRef(new THREE.Color("#00E5FF"));

  useEffect(() => {
    if (themeMode === "purple") {
      targetColorRef.current.set("#A855F7");
    } else {
      targetColorRef.current.set("#00E5FF");
    }
  }, [themeMode]);

  const nodePositions = useMemo<[number, number, number][]>(() => {
    const total = portfolioData.skills.length;
    return portfolioData.skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const radius = 3.2;
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi) * 0.7,
        radius * Math.cos(phi),
      ];
    });
  }, []);

  useFrame((_, delta) => {
    const lerpFactor = Math.min(delta * 4, 1);
    currentColorRef.current.lerp(targetColorRef.current, lerpFactor);

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <ConstellationLines positions={nodePositions} color={currentColorRef.current} />
      {portfolioData.skills.map((skill, index) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          position={nodePositions[index]}
          themeColor={currentColorRef.current}
          onHover={onHover}
        />
      ))}
    </group>
  );
}

export const SkillConstellation3D: React.FC<{
  onHoverSkill: (skill: SkillItem | null) => void;
}> = ({ onHoverSkill }) => {
  const { theme } = useTheme();

  return (
    <div className="relative h-[360px] md:h-[440px] w-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[6, 6, 6]} intensity={1.5} />
        <pointLight position={[-6, -6, -6]} intensity={1} />
        <ConstellationOrbit onHover={onHoverSkill} themeMode={theme} />
      </Canvas>
    </div>
  );
};
