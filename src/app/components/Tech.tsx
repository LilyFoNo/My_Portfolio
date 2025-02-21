"use client"
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "motion/react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="tech"
      >
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => {
            return (
              <div key={index} className="w-28 h-28"> 
              <BallCanvas icon={{ imgUrl: technology.icon }}/>
               </div>
            )
          })}
        </div>
      </motion.section>
    </>
  );
};

export default Tech;