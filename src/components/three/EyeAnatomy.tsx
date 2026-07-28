'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface PartData {
  name: string;
  color: string;
  emissive: string;
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
  info: string;
}

const PARTS: Record<string, PartData> = {
  cornea: {
    name: 'Cornea',
    color: '#E0F2FE',
    emissive: '#0284C7',
    scale: [1.2, 1.2, 0.4],
    position: [0, 0, 0.6],
    info: 'The transparent front layer of the eye that helps focus light.',
  },
  iris: {
    name: 'Iris',
    color: '#0369A1',
    emissive: '#00AEEF',
    scale: [0.85, 0.85, 0.08],
    position: [0, 0, 0.2],
    info: 'The colored part of the eye that controls the size of the pupil.',
  },
  pupil: {
    name: 'Pupil',
    color: '#020617',
    emissive: '#111827',
    scale: [0.35, 0.35, 0.1],
    position: [0, 0, 0.25],
    info: 'The black circular opening in the center of the iris that lets light in.',
  },
  lens: {
    name: 'Lens',
    color: '#BAE6FD',
    emissive: '#38BDF8',
    scale: [0.5, 0.5, 0.6],
    position: [0, 0, -0.1],
    info: 'The clear structure behind the iris that focuses light onto the retina.',
  },
  retina: {
    name: 'Retina',
    color: '#FCA5A5',
    emissive: '#EF4444',
    scale: [1.6, 1.6, 0.05],
    position: [0, 0, -1.5],
    info: 'The light-sensitive layer at the back of the eye that captures images.',
  },
  opticNerve: {
    name: 'Optic Nerve',
    color: '#FCD34D',
    emissive: '#F59E0B',
    scale: [0.2, 0.2, 1.2],
    position: [0, 0, -2.2],
    rotation: [0.1, 0, 0],
    info: 'The nerve that transmits visual signals from the retina to the brain.',
  },
  sclera: {
    name: 'Sclera',
    color: '#F5F5F0',
    emissive: '#D4D4D8',
    scale: [1.8, 1.8, 1.8],
    position: [0, 0, -0.5],
    info: 'The white outer layer of the eye that provides structure and protection.',
  },
};

const PART_KEYS = ['sclera', 'retina', 'opticNerve', 'lens', 'iris', 'pupil', 'cornea'];

function AnatomyPart({ partKey, onClick, isHovered, onHover }: {
  partKey: string;
  onClick: () => void;
  isHovered: boolean;
  onHover: (v: boolean) => void;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const part = PARTS[partKey];

  useFrame((state) => {
    if (!ref.current) return;
    if (isHovered) {
      ref.current.scale.lerp(
        new THREE.Vector3(...part.scale).multiplyScalar(1.08),
        0.1
      );
    } else {
      ref.current.scale.lerp(new THREE.Vector3(...part.scale), 0.1);
    }
  });

  if (partKey === 'sclera') {
    return (
      <mesh ref={ref} position={part.position}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshPhysicalMaterial
          color={part.color}
          emissive={isHovered ? part.emissive : '#000000'}
          emissiveIntensity={isHovered ? 0.3 : 0}
          roughness={0.4}
          metalness={0.0}
          clearcoat={0.5}
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
    );
  }

  if (partKey === 'retina') {
    return (
      <mesh
        ref={ref}
        position={part.position}
        onClick={onClick}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <circleGeometry args={[1.6, 64]} />
        <meshPhysicalMaterial
          color={part.color}
          emissive={isHovered ? part.emissive : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0.1}
          roughness={0.6}
          metalness={0.0}
          side={THREE.DoubleSide}
        />
        {isHovered && (
          <Html position={[0, 1.2, 0]} center>
            <div className="glass px-4 py-2 rounded-xl text-center whitespace-nowrap pointer-events-none">
              <div className="text-sm font-semibold text-white">{part.name}</div>
              <div className="text-xs text-cyan-300 mt-1 max-w-[200px] whitespace-normal">
                {part.info}
              </div>
            </div>
          </Html>
        )}
      </mesh>
    );
  }

  if (partKey === 'opticNerve') {
    return (
      <mesh
        ref={ref}
        position={part.position}
        rotation={part.rotation || [0, 0, 0]}
        onClick={onClick}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <cylinderGeometry args={[0.2, 0.15, 1.2, 32]} />
        <meshPhysicalMaterial
          color={part.color}
          emissive={isHovered ? part.emissive : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0.1}
          roughness={0.5}
        />
        {isHovered && (
          <Html position={[0, 1, 0]} center>
            <div className="glass px-4 py-2 rounded-xl text-center whitespace-nowrap pointer-events-none">
              <div className="text-sm font-semibold text-white">{part.name}</div>
              <div className="text-xs text-cyan-300 mt-1 max-w-[200px] whitespace-normal">
                {part.info}
              </div>
            </div>
          </Html>
        )}
      </mesh>
    );
  }

  return (
    <mesh
      ref={ref}
      position={part.position}
      onClick={onClick}
      onPointerEnter={() => onHover(true)}
      onPointerLeave={() => onHover(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color={part.color}
        emissive={isHovered ? part.emissive : '#000000'}
        emissiveIntensity={isHovered ? 0.5 : 0.1}
        roughness={0.3}
        metalness={0.1}
        clearcoat={0.8}
        transparent={partKey === 'cornea' || partKey === 'lens'}
        opacity={partKey === 'cornea' ? 0.5 : partKey === 'lens' ? 0.6 : 1}
      />
      {isHovered && (
        <Html position={[0, part.scale[1] + 0.4, 0]} center>
          <div className="glass px-4 py-2 rounded-xl text-center whitespace-nowrap pointer-events-none">
            <div className="text-sm font-semibold text-white">{part.name}</div>
            <div className="text-xs text-cyan-300 mt-1 max-w-[200px] whitespace-normal">
              {part.info}
            </div>
          </div>
        </Html>
      )}
    </mesh>
  );
}

function AnatomyScene({ selectedPart, onSelectPart, hoveredPart, onHoverPart }: {
  selectedPart: string | null;
  onSelectPart: (key: string | null) => void;
  hoveredPart: string | null;
  onHoverPart: (key: string | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1} />
      <pointLight position={[0, 0, 4]} intensity={0.6} color="#00AEEF" />
      <pointLight position={[-2, -1, 2]} intensity={0.3} color="#C9A84C" />

      <group ref={groupRef} scale={1.2}>
        {PART_KEYS.map((key) => (
          <AnatomyPart
            key={key}
            partKey={key}
            onClick={() => onSelectPart(selectedPart === key ? null : key)}
            isHovered={hoveredPart === key || selectedPart === key}
            onHover={(v) => onHoverPart(v ? key : null)}
          />
        ))}
      </group>

      <Environment preset="city" />
      <fog attach="fog" args={['#0A0E27', 8, 18]} />
    </>
  );
}

export default function EyeAnatomy() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const activePart = selectedPart || hoveredPart;
  const partData = activePart ? PARTS[activePart] : null;

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <AnatomyScene
          selectedPart={selectedPart}
          onSelectPart={setSelectedPart}
          hoveredPart={hoveredPart}
          onHoverPart={setHoveredPart}
        />
      </Canvas>

      {/* Info Panel */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 glass-strong rounded-2xl px-6 py-4 max-w-md w-[90%] transition-all duration-500 ${
          partData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <h4 className="text-lg font-semibold text-white mb-1">{partData?.name}</h4>
        <p className="text-sm text-cyan-200/70 leading-relaxed">{partData?.info}</p>
      </div>

      {/* Interaction hint */}
      <div className={`absolute top-6 left-1/2 -translate-x-1/2 text-xs text-white/40 transition-opacity duration-500 ${
        selectedPart ? 'opacity-0' : 'opacity-100'
      }`}>
        Click & hover on parts to explore
      </div>
    </div>
  );
}
