"use client";

import { styles } from "../styles";
import { SphereCanvas } from "./canvas";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import { staggerContainer } from "../utils/motion";

const Scene = dynamic(() => import("./Robot/Scene"), { ssr: false });

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="relative w-full h-screen mx-auto"
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] maxw-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-5`}
      >
        <div className="order-2 lg:order-none flex">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />

            <motion.div
              initial={{ height: "0rem", opacity: 0 }}
              animate={{
                height: "20rem",
                opacity: 1,
                transition: { duration: 1, ease: "easeIn" },
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
              I develop 3D, user <br className="sm:block hidden" /> interfaces
              and web applications
            </motion.p>

            <div className="flex gap-10">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1, staggerChildren: 0.2 },
                }}
                className={`${styles.iconDiv} rounded-xl hover:shadow-linkedin`}
              >
                <FaLinkedinIn color="#0072b1" size={35} />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1, staggerChildren: 0.2 },
                }}
                className={`${styles.iconDiv} rounded-full hover:shadow-gitHub`}
              >
                <IoLogoGithub color="white" size={35} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* <div className="relative w-[50%]">
          <div className="w-full h-screen fixed -right-[40rem] -top-20">
            <Scene />
          </div>
        </div> */}
        <div className="order-1 lg:order-none xl:w-[50rem] xl:h-[40rem] lg:w-[20rem] lg:h-[20rem] relative">
          <div className="img absolute xl:left-[17rem] xl:top-[13rem] lg:left-[5rem] lg:top-[5rem] z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
              }}
              className="relative rounded-full flex items-center justify-center lg:w-[9rem] lg:h-[9rem] xl:w-[15.7rem] xl:h-[15.7rem]"
            >
              <Image
                src={"/profile.jpeg"}
                alt="profile picture"
                fill
                quality={100}
                className=" rounded-full"
              />
            </motion.div>

            <motion.svg
              className="w-[300px] xl:w-[506px] h-[300px] xl-[506px] absolute -top-[1.5rem] -right-32"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.0rg/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="210"
                stroke="#060816"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="w-full h-full absolute"
          >
            <SphereCanvas />
          </motion.div>
        </div>
      </div>

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
    </motion.section>
  );
};

export default Hero;
