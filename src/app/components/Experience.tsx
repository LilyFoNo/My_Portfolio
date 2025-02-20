"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "motion/react";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import Image, { StaticImageData } from "next/image";
import { staggerContainer } from "../utils/motion";

interface IExperienceCard {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}: IExperienceCard) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
        date={date}
        iconStyle={{ background: iconBg }}
        icon={
          <div className="flex justify-center items-center relative w-full h-full">
            <Image
              src={icon}
              alt={company_name}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="vertical-timeline-element-title text-white text-[24px]">
            {title}
          </h3>
        </div>
      </VerticalTimelineElement>
    </>
  );
};

const Experience = () => {
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
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        <div className="mt-2o flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => {
              return <ExperienceCard key={index} {...experience} />;
            })}
          </VerticalTimeline>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
