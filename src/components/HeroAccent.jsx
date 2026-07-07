import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function AccentShape() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.25;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.35;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} scale={0.85}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#fb923c"
          emissive="#f472b6"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

export default function HeroAccent() {
  return (
    <div className="hero-accent-3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 4, 4]} intensity={1.1} color="#fb923c" />
        <pointLight position={[-3, -2, 2]} intensity={0.6} color="#f472b6" />
        <Suspense fallback={null}>
          <AccentShape />
        </Suspense>
      </Canvas>
    </div>
  );
}
