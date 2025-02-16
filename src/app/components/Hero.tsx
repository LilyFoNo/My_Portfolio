"use client";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Robot/Scene"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] maxw-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Liliana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D, user <br className="sm:block hidden" /> interfaces and
            web applications
          </p>
        </div>
        <div className="relative w-[50%]">
          <div className="w-full h-96 absolute right-0">
            <Scene />
          </div>
        </div>
      </div>

    <ComputersCanvas />
    </section>
  );
};

export default Hero;
