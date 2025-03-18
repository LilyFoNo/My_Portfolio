"use client"
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// useGLTF.preload("/img/planet/scene.gltf");

const Earth = () => {
  // const earth = useGLTF("/img/earth_cartoon.glb");
  const earth = useGLTF("/img/earth.glb");
  // const earth = useGLTF("/img/planet/scene.gltf");

  return (
    <>
      <mesh>
        <primitive
          object={earth.scene}
          scale={2}
          position-y={1.5}
          rotation-y={0}
        />
      </mesh>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <>
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 5] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
      </Canvas>
    </>
  );
};
export default EarthCanvas;
