"use client";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import { socialMediaIcons } from "../constants";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BlobPage from "./Blob";

const Hero = () => {
  return (
    <>
      <section
        className={`relative lg:h-screen overflow-x-hidden flex lg:justify-between items-center gap-5 lg:flex-row flex-col sm:px-16 px-6 sm:pt-16 pt-36`}
        id="hero"
      >
        <div className="order-2 lg:order-none flex gap-5 justify-center lg:w-1/3 mx-auto pt-10 lg:pt-0 ">
          <div className="flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              className="w-5 h-5 rounded-full bg-[#915eff]"
            />
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
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            className="flex flex-col gap-5"
          >
            <h1
              className={`${styles.heroHeadText} font-shadowsIntoLight w-fit text-center`}
            >
              Hi, I'm&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#94ccb4] via-[#d05de2] to-[#f0aa63] font-moonDance">
                Liliana
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
            >
              <TextGenerateEffect
                className={`mt-2 font-shadowsIntoLight text-justify`}
                words="Full-stack developer specializing in dynamic web applications. Currently expanding my expertise in 3D development to create immersive user experiences."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              }}
              className="flex gap-10 justify-center w-1/2 mx-auto"
            >
              {socialMediaIcons.map((icon) => {
                const img =
                  icon.icon === "FaLinkedinIn" ? (
                    <FaLinkedinIn color={`${icon.color}`} size={icon.size} />
                  ) : (
                    <IoLogoGithub color={`${icon.color}`} size={icon.size} />
                  );
                return (
                  <div
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
                  </div>
                );
              })}
              {/* <div className="border border-[#a078f7] w-fit px-5 rounded-full flex items-center ">
                <p className="font-indieFlower">Resume</p>
              </div> */}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="img relative order-1 lg:order-none flex justify-center mx-auto -mt-10 sm:-mt-5 md:mt-24 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, ease: "easeIn" },
          }}
        >
          <div className="relative rounded-full flex items-center justify-center w-[15rem] h-[15rem] xl:w-[15.7rem] xl:h-[15.7rem] ">
            <Image
              src={"/profile.avif"}
              alt="profile picture"
              fill
              quality={100}
              className=" rounded-full absolute"
            />
          </div>

          <motion.svg
            className="w-[20rem] xl:w-[30rem] h-[20rem] xl:h-[28rem] absolute -top-10 xl:-top-20"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.0rg/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="210"
              stroke="#a078f7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0", opacity: 0 }}
              animate={{
                opacity: 1,
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
        {/* <div className="absolute bottom-5 left-1/2"> */}
        <BlobPage id="about" />
        {/* </div> */}
      </section>
    </>
  );
};

export default Hero;

// 2e193a
