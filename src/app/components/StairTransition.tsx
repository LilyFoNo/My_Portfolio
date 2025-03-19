"use client";

import { AnimatePresence, motion } from "framer-motion";

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            exit={{ top: ["100%", "0%"] }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full relative bg-[#160b26] border border-x-green-600"
          />
        );
      })}
    </>
  );
};

const StairTransition = () => {

  return (
    <>
      <AnimatePresence >
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          {/* <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          /> */}
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
