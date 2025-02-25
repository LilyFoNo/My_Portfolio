"use client";
import { motion } from "framer-motion";

const NavigateComponent = ({id}:{id:string}) => {
  return (
    <>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex xl:justify-center xl:items-center justify-end px-5">
        <a href={`#${id}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="w-[35px] h-[64px] rounded-full border-4 border-secondary justify-center items-start p-2 hidden md:flex"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </div>
    </>
  );
};

export default NavigateComponent;
