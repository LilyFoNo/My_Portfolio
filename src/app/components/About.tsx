"use client";
import { Tilt } from "react-tilt";
import { motion } from "motion/react";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image, { StaticImageData } from "next/image";
import { staggerContainer } from "../utils/motion";

interface IService {
  index: number;
  title: string;
  icon: string;
}

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

const ServiceCard = ({ index, title, icon }: IService) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full" options={defaultOptions}>
        <motion.div
          variants={fadeIn("right", "sprin", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col">
            <div className="w-16 h-16 relative">
              <Image src={icon} alt={title} fill className="object-contain" />
            </div>
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="about"
      >
        <motion.div variants={textVariant(1)} className="mt-10">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[1.2rem] leading-[2rem] text-justify"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => {
            return (
              <ServiceCard key={service.title} index={index} {...service} />
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default About;
