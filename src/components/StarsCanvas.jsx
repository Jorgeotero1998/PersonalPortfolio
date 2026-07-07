import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return mobile;
}

function StarLayer({ count, radius, speed, color, size, parallax = 1, frozen = false }) {
  const ref = useRef();
  const positions = useMemo(
    () => random.inSphere(new Float32Array(count * 3), { radius }),
    [count, radius]
  );

  useFrame((state, delta) => {
    if (!ref.current || frozen) return;
    ref.current.rotation.x -= (delta / 14) * speed;
    ref.current.rotation.y -= (delta / 20) * speed;
    const { pointer } = state;
    ref.current.rotation.x += pointer.y * 0.035 * parallax;
    ref.current.rotation.y += pointer.x * 0.035 * parallax;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function AmbientGlow({ frozen = false }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current || frozen) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.x = Math.sin(t * 0.15) * 0.4;
    ref.current.position.y = Math.cos(t * 0.12) * 0.25;
  });

  return (
    <mesh ref={ref} position={[0.3, 0.1, -0.5]}>
      <sphereGeometry args={[0.35, 16, 16]} />
      <meshBasicMaterial color="#fb923c" transparent opacity={0.04} />
    </mesh>
  );
}

function Scene({ frozen, mobile }) {
  const farCount = mobile ? 1200 : 3000;
  const midCount = mobile ? 800 : 2000;
  const nearCount = mobile ? 400 : 1000;

  return (
    <>
      <StarLayer count={farCount} radius={1.8} speed={0.6} color="#ffcba4" size={0.0015} parallax={0.5} frozen={frozen} />
      <StarLayer count={midCount} radius={1.3} speed={1} color="#f472b6" size={0.002} parallax={1} frozen={frozen} />
      <StarLayer count={nearCount} radius={0.9} speed={1.4} color="#fb923c" size={0.0028} parallax={1.6} frozen={frozen} />
      <AmbientGlow frozen={frozen} />
    </>
  );
}

export default function StarsCanvas() {
  const reducedMotion = useReducedMotion();
  const mobile = useIsMobile();
  const frozen = reducedMotion;

  return (
    <div className="stars-canvas" aria-hidden="true">
      <div className="gradient-mesh gradient-mesh--hero" />
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={mobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene frozen={frozen} mobile={mobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
