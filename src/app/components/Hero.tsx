"use client";

import { styles } from "../styles";
import { SphereCanvas } from "./canvas";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import { staggerContainer } from "../utils/motion";
import { socialMediaIcons } from "../constants";
import Link from "next/link";

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
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-5`}
      >
        <div className="order-2 md:order-none flex gap-5 md:w-[50%] w-full">
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
              className={`${styles.heroHeadText} font-shadowsIntoLight w-fit`}
            >
              Hi, I'm&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#94ccb4] via-[#d05de2] to-[#f0aa63] font-moonDance">
                Liliana
              </span>
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, staggerChildren: 0 },
              }}
              className={`${styles.heroSubText} mt-2 text-white-100 font-shadowsIntoLight text-center`}
            >
              I'm a&nbsp;
              <span className="text-[#a078f7]">full-stack developer</span>
              &nbsp;specializing in dynamic web applications. Currently, I'm
              expanding my expertise in&nbsp;
              <span className="text-[#a078f7]">3D develpment</span>&nbsp;to
              create immersive user experiences.
            </motion.p>
            <div className="flex gap-10 w-[50%]">
              {socialMediaIcons.map((icon) => {
                const img =
                  icon.icon === "FaLinkedinIn" ? (
                    <FaLinkedinIn color={`${icon.color}`} size={icon.size} />
                  ) : (
                    <IoLogoGithub color={`${icon.color}`} size={icon.size} />
                  );
                return (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: 100,
                      opacity: 1,
                      transition: { duration: 1, staggerChildren: 0.2 },
                    }}
                    className={`${styles.iconDiv} ${icon.className}`}
                    key={icon.title}
                  >
                    <Link
                      href={`${icon.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {img}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="relative w-[50%]">
          <div className="w-full h-screen fixed -right-[40rem] -top-20">
            <Scene />
          </div>
        </div> */}
        <div className="order-1 md:order-none xl:w-[50rem] xl:h-[40rem] lg:w-[25rem] lg:h-[25rem] w-[15rem] h-[15rem] relative">
          <div className="img absolute xl:left-[17rem] xl:top-[13rem] left-[1.8rem] top-0 z-10 lg:left-[7rem] lg:top-[7rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
              }}
              className="relative rounded-full flex items-center justify-center w-[10rem] h-[10rem] xl:w-[15.7rem] xl:h-[15.7rem]"
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
              className="w-[200px] xl:w-[20rem] h-[200px] xl:h-[19rem] absolute xl:-top-[1.7rem] xl:-left-[2.2rem] -top-[1.2rem] -left-[1.2rem]"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.0rg/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="210"
                stroke="#FFFF33"
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
            className="w-full h-full absolute hidden lg:block"
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
            className="w-[35px] h-[64px] rounded-full border-4 border-secondary justify-center items-start p-2 hidden md:flex"
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
