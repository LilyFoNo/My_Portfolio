"use client";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { projects } from "../constants";
import { staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";
import WorkSliderBtns from "./ui/WorkSliderBtns";
import "swiper/css";

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: {
    activeIndex: number;
    isBeginning: boolean | ((prevState: boolean) => boolean);
    isEnd: boolean | ((prevState: boolean) => boolean);
  }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`min-h-[80vh] flex flex-col justify-center ${styles.padding} z-50`}
        id="work"
      >
        <motion.div variants={textVariant(1)}>
          <p className={`${styles.sectionSubText} text-center mt-10`}>
            What I have done so far
          </p>
          <h2
            className={`${styles.sectionHeadText} text-center ${styles.textColor2}`}
          >
            Projects.
          </h2>
        </motion.div>
        <div className="container mx-auto mt-5">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%] ">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline font-mono">
                  {project.num}
                </div>
                <h2 className="text-6xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#94ccb4] via-[#765bc2] to-[#f0aa63] capitalize font-shadowsIntoLight">
                  {project.category}
                </h2>
                <p className="text-white/60 text-justify">
                  {project.description}
                </p>
                <ul className="flex gap-4 flex-wrap">
                  {project.tags.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${item.color} text-xl font-preahvihear`}
                      >
                        {item.name}
                        {index !== project.tags.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20 "></div>
                <div className="flex item-center gap-4">
                  <Link
                    href={project.url}
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-[#b993c5]" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link
                    href={project.link}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub
                            className="text-white text-3xl group-hover:text-[#b993c5]
                          "
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image}
                            alt={`${item.name}_image`}
                            fill
                            className="object-cover hidden xs:block"
                          />
                          <Image
                            src={item.image_mobile}
                            alt={`${item.name}_image`}
                            fill
                            className="object-cover xs:hidden block"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSliderBtns
                  containerStyles={`flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none`}
                  btnStyles={`text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all`}
                  iconStyles=""
                  isBeginning={isBeginning}
                  isEnd={isEnd}
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;
