"use client";

import { motion } from "motion/react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import Tech from "./Tech";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const AboutComponent = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="about"
      >
        <motion.div variants={textVariant(1)} className="mt-10">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 1, 1)}
          className="mt-4 text-secondary text-[1.2rem] leading-[2rem] text-justify"
        >
          I&apos;m a skilled software developer with experience in TypeScript
          and JavaScript, specializing in frameworks like React, Node.js, and
          Next.js. As a quick learner, I thrive in collaborative environments,
          working closely with teams to create efficient, scalable, and
          user-friendly solutions that address real-world challenges. Let&apos;s
          work together to bring your ideas to life!
        </motion.p>

        <Tech />
      </motion.section>
    </>
  );
};

export default AboutComponent;
