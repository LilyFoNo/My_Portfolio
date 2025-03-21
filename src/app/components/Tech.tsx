"use client";
import { staggerContainer } from "../utils/motion";
import { motion } from "motion/react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Tech = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0`}
        id="tech"
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center gap-y-5">
          {technologies.map((technology, index) => {
            return (
              <li key={index} className="w-28 h-28">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-28 h-28 hidden sm:block">
                      <BallCanvas icon={{ imgUrl: technology.icon }} />
                      <p>{technology.name}</p>

                    </TooltipTrigger>
                    <TooltipTrigger className="w-28 h-28 sm:hidden group">
                      <technology.icon_mobile
                        className={`text-5xl mx-auto group-hover:text-[#b993c5]`}
                      />
                      <p
                        className={`group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#94ccb4] via-[#b993c5] to-[#f0aa63]`}
                      >
                        {technology.name}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{technology.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </motion.section>
    </>
  );
};

export default Tech;
