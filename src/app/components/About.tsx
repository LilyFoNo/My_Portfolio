"use client";

import { motion } from "motion/react";
import { styles } from "../styles";
import {  textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import Resume from "./Resume";

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
        <Resume />
      </motion.section>
    </>
  );
};

export default AboutComponent;
