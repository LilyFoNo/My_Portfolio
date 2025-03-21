"use client";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { motion } from "motion/react";
import { about, education } from "../constants";
import Tech from "./Tech";
import { styles } from "../styles";

const Resume = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5 font-shadowsIntoLight">
              <TabsTrigger value={"about"}>About Me</TabsTrigger>
              <TabsTrigger value={"skills"}>Skills</TabsTrigger>
              <TabsTrigger value={"education"}>Education</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className={`${styles.sectionHeadText} ${styles.textColor2}`}>
                    {education.title}
                  </h3>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-[#b993c5] font-preahvihear">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-purple-500"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[40px]">
                  <h3 className={`${styles.sectionHeadText} ${styles.textColor}`}>
                    My Skills
                  </h3>
                  <ScrollArea className="h-[350px]">
                    <Tech />
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className={`${styles.sectionHeadText} ${styles.textColor2}`}>
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-preahvihear text-justify">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-10 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60 font-preahvihear">
                            {item.fieldName}
                          </span>
                          <span className="text-xl font-indieFlower">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
