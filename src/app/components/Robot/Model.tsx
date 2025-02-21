import * as THREE from 'three';
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/robot/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot/robot_playground.glb"
  );

  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(()=>{
    actions["Experiment"]!.play().setLoop(THREE.LoopRepeat, Infinity); 
  },[actions])

  // useFrame(()=>{
  //   if(actions["Experiment"]){

  //     (actions["Experiment"]!.time) = (actions["Experiment"]!.getClip().duration * scroll.offset)
  //   }
  // })

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
