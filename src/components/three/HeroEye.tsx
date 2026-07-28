'use client';

import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/* ── Iris Particle Ring ── */
function IrisParticles({ count = 800 }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colA = new THREE.Color('#00AEEF');
    const colB = new THREE.Color('#7DD3FC');
    const colC = new THREE.Color('#0369A1');

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
      const r = 0.78 + Math.random() * 0.22;
      const z = (Math.random() - 0.5) * 0.08;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = Math.sin(angle) * r;
      pos[i * 3 + 2] = z;

      const t = Math.random();
      const col = t < 0.33 ? colA : t < 0.66 ? colB : colC;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }
    return { positions: pos, colors };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(positions.colors, 3));
    return geo;
  }, [positions]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    ref.current.rotation.z = time * 0.08;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + time * 0.08;
      const r = 0.78 + Math.sin(time * 2 + i * 0.1) * 0.03;
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = Math.sin(angle) * r;
      arr[i * 3 + 2] = Math.sin(time * 3 + i) * 0.04;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.012}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Iris Mesh ── */
function IrisMesh() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0.12]}>
      <circleGeometry args={[0.82, 64]} />
      <MeshDistortMaterial
        color="#006994"
        speed={0.5}
        distort={0.15}
        radius={1}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

/* ── Pupil ── */
function Pupil() {
  return (
    <mesh position={[0, 0, 0.14]}>
      <circleGeometry args={[0.32, 64]} />
      <meshBasicMaterial color="#020817" />
    </mesh>
  );
}

/* ── Eye White (Sclera) ── */
function Sclera() {
  return (
    <>
      {/* Front hemisphere */}
      <mesh>
        <sphereGeometry args={[1.8, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#F5F5F0"
          roughness={0.3}
          metalness={0.0}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          transmission={0.05}
          thickness={0.5}
        />
      </mesh>
      {/* Cornea bump */}
      <mesh position={[0, 0, 0.05]}>
        <sphereGeometry args={[1.15, 64, 64, 0, Math.PI * 2, 0, Math.PI / 3]} />
        <meshPhysicalMaterial
          color="#E8F4FD"
          roughness={0.05}
          metalness={0.0}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.3}
          thickness={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
    </>
  );
}

/* ── Eyelid (blink) ── */
function Eyelid({ isTop }: { isTop: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const blinkRef = useRef(0);
  const blinkTimer = useRef(0);
  const isBlinking = useRef(false);

  useFrame((state, delta) => {
    if (!ref.current) return;
    blinkTimer.current += delta;

    if (!isBlinking.current && blinkTimer.current > 3.5 + Math.random() * 2) {
      isBlinking.current = true;
      blinkTimer.current = 0;
    }

    if (isBlinking.current) {
      if (blinkRef.current < 1) {
        blinkRef.current = Math.min(blinkRef.current + delta * 8, 1);
        if (blinkRef.current >= 1) {
          // hold briefly then open
        }
      } else {
        blinkRef.current = Math.max(blinkRef.current - delta * 6, 0);
        if (blinkRef.current <= 0) {
          isBlinking.current = false;
          blinkTimer.current = 0;
        }
      }
    }

    const y = isTop
      ? THREE.MathUtils.lerp(1.9, 0.15, blinkRef.current)
      : THREE.MathUtils.lerp(-1.9, -0.15, blinkRef.current);

    ref.current.position.y = y;
    ref.current.scale.setScalar(1.05);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.0, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial
        color={isTop ? '#E8D5C4' : '#DDD0C0'}
        roughness={0.8}
        metalness={0.0}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ── Blood Vessels ── */
function BloodVessels() {
  const curvePoints = useMemo(() => {
    const curves: THREE.Vector3[][] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j < 10; j++) {
        const t = j / 9;
        const r = 1.8 - t * 0.8;
        pts.push(
          new THREE.Vector3(
            Math.cos(angle + t * 0.3) * r,
            Math.sin(angle + t * 0.3) * r,
            0.02 + t * 0.05
          )
        );
      }
      curves.push(pts);
    }
    return curves;
  }, []);

  return (
    <group>
      {curvePoints.map((pts, i) => (
        <mesh key={i}>
          <tubeGeometry
            args={[
              new THREE.CatmullRomCurve3(pts),
              20,
              0.008 + Math.random() * 0.008,
              6,
              false,
            ]}
          />
          <meshStandardMaterial
            color="#CC4444"
            transparent
            opacity={0.3}
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Light Rays ── */
function LightRays() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={ref}>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 2.5, Math.sin(angle) * 2.5, -0.5]}
            rotation={[0, 0, angle]}
          >
            <planeGeometry args={[0.02, 2]} />
            <meshBasicMaterial
              color="#00AEEF"
              transparent
              opacity={0.06}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Camera Rig ── */
function CameraRig() {
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.15) * 0.15;
    camera.position.y = Math.cos(t * 0.12) * 0.1;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Main Scene ── */
function EyeScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} color="#FFFFFF" />
      <directionalLight position={[-2, -1, 3]} intensity={0.4} color="#7DD3FC" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#00AEEF" distance={10} />
      <pointLight position={[2, 1, 2]} intensity={0.3} color="#C9A84C" distance={8} />

      <CameraRig />

      <group rotation={[0, 0, 0]} scale={1.1}>
        <Sclera />
        <BloodVessels />
        <IrisMesh />
        <IrisParticles />
        <Pupil />
        <Eyelid isTop={true} />
        <Eyelid isTop={false} />
        <LightRays />
      </group>

      <Sparkles
        count={60}
        scale={6}
        size={1.5}
        speed={0.3}
        color="#00AEEF"
        opacity={0.4}
      />
      <Sparkles
        count={30}
        scale={5}
        size={1}
        speed={0.2}
        color="#C9A84C"
        opacity={0.2}
      />

      <Environment preset="city" />
      <fog attach="fog" args={['#0A0E27', 6, 15]} />
    </>
  );
}

/* ── Exported Component ── */
export default function HeroEye() {
  return (
    <div className="eye-canvas-container w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <EyeScene />
      </Canvas>
    </div>
  );
}
