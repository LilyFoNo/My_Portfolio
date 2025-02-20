"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useState } from "react";
import { ScrollControls, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";

export default function Scene() {
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[2, 1.5]}
      camera={{ position: [5, 15, 20], fov: 30 }}
      className={`relative h-screen ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<CanvasLoader />}>
        <ScrollControls damping={0.2} pages={2}>
          <OrbitControls enableZoom={false} />
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
