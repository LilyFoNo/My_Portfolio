"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

useGLTF.preload("/img/desktop_pc/scene.gltf");

interface IComputers {
  isMobile: boolean;
}

const Computers = ({ isMobile }: IComputers) => {
  const computer = useGLTF("/img/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.4}  groundColor="gray" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={1} />
      <pointLight position={[10, 20, 10]} intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("max-width: 500px");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      const debounceTimeout = setTimeout(() => setIsMobile(event.matches), 100);
      clearTimeout(debounceTimeout);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    console.log(isMobile, mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobile]);
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className={`${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
