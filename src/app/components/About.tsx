"use client";

import { motion } from "motion/react";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import Resume from "./Resume";
import BlobPage from "./Blob";

const AboutComponent = () => {
  return (
    <>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={` max-w-7xl mx-auto relative z-50 sm:px-16 px-6 sm:pt-16 pt-10`}
          id="about"
        >
          <motion.div variants={textVariant(1)} className="mt-10">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} ${styles.textColor}`}>Overview.</h2>
          </motion.div>
          <Resume />
          <BlobPage id="work"/>
        </motion.section>
    </>
  );
};

export default AboutComponent;
