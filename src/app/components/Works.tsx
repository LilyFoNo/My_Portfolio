"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface IProjectCard {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  link: string;
}
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
}: IProjectCard) => {
  return (
  <>
  
  </>
  );
};

const Works = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="work"
      >
        <motion.div variants={textVariant(1)}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => {
            return <ProjectCard key={index} index={index} {...project} />;
          })}
        </div>
      </motion.section>
    </>
  );
};

export default Works;
