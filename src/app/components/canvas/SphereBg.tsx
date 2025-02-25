"use client";
import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Preload,
  Sphere,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const SphereBg = () => {

  return (
    <mesh>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#bb8ed0"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </mesh>
  );
};

const SphereCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <SphereBg />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SphereCanvas;
