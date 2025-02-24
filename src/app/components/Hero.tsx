"use client";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Scene = dynamic(() => import("./Robot/Scene"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] maxw-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          <motion.div
            initial={{ height: "0rem", opacity: 0 }}
            animate={{
              height: "20rem",
              opacity: 1,
              transition: { duration: 1 },
            }}
            className="w-1 violet-gradient"
          />
        </div>
        <div className="flex flex-col gap-5">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            className={`${styles.heroHeadText}`}
          >
            Hi, I'm <span className="text-[#915eff]">Liliana</span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0 },
            }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I develop 3D, user <br className="sm:block hidden" /> interfaces and
            web applications
          </motion.p>

          <motion.div className="flex gap-10">
            <div
              className={`${styles.iconDiv} rounded-xl hover:shadow-linkedin`}
            >
              <FaLinkedinIn color="#0072b1" size={35} />
            </div>
            <div
              className={`${styles.iconDiv} rounded-full hover:shadow-gitHub`}
            >
              <IoLogoGithub color="white" size={35} />
            </div>
          </motion.div>
        </div>

        {/* <div className="relative w-[50%]">
          <div className="w-full h-screen fixed -right-[40rem] -top-20">
            <Scene />
          </div>
        </div> */}
      </div>

      {/* <div className="w-[70rem] h-[50rem]">
        <ComputersCanvas />
      </div> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
