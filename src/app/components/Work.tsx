"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

interface IProjectCard {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  link: string;
  url: string;
}
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
  url,
}: IProjectCard) => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={() => window.open(url, "_blank")}
        id="work"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
        >
          <div className="relative w-full h-[230px]">
            <Image
              src={`${image}`}
              alt="project_image"
              fill
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src="/assets/github.png"
                  alt="source code"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#94ccb4] via-[#d05de2] to-[#f0aa63] font-bold text-[30px] font-moonDance">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] text-justify font-preahvihear">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const WorksComponent = () => {
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
          <p className={`${styles.sectionSubText} text-center mt-10`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[1.2rem] leading-[30px] text-justify font-preahvihear"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
          {projects.map((project, index) => {
            return <ProjectCard key={index} index={index} {...project} />;
          })}
        </div>
      </motion.section>
    </>
  );
};

export default WorksComponent;
