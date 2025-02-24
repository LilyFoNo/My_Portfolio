"use client";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ icon }: { icon: { imgUrl: string } }) => {
  const [decal] = useTexture([icon.imgUrl]);
  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 0.08]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="white"
            polygonOffset
            polygonOffsetFactor={-7}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 0.625]}
            scale={0.9}
            map={decal}
          />
        </mesh>
      </Float>
    </>
  );
};

const BallCanvas = ({ icon }: { icon: { imgUrl: string } }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };
  return (
    <>
      <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className={`${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <Ball icon={{ imgUrl: icon.imgUrl }} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default BallCanvas;
