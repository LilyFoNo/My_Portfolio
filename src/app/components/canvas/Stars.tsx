"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { ReactThreeFiber } from "@react-three/fiber";
import { Euler } from "three";

const Stars = (props: any) => {
  const ref =
    useRef<ReactThreeFiber.Object3DNode<typeof Points, typeof Points>>(null);
  const sphere = random.inSphere(new Float32Array(15000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current && ref.current.rotation) {
      const rotation = ref.current.rotation;

      if (rotation instanceof Euler) {
        rotation.x -= delta / 10;
        rotation.y -= delta / 15;
      } else {
        rotation[0] -= delta / 10;
        rotation[1] -= delta / 15;
      }
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
