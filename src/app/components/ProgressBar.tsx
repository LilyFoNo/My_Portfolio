"use client";
import { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

const ProgressBar = ({ onIsLoading }: { onIsLoading: () => void }) => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    const customEase = CustomEase.create("custom", ".87,0,.13,1");
    const counter = document.getElementById("counter");

    gsap.set("#info", {
      opacity: 0,
    });

    gsap.to("#container", {
      clipPath: "polygon(0% 45%,25% 45%, 25% 55%, 0% 55%)",
      duration: 1,
      ease: customEase,
    });

    gsap.to("#container", {
      clipPath: "polygon(0% 45%,100% 45%, 100% 55%, 0% 55%)",
      duration: 2,
      ease: customEase,
      delay: 1,

      onStart: () => {
        gsap.to("#progressBar", {
          width: "100vw",
          duration: 2,
          ease: customEase,
        });

        gsap.to(counter, {
          innerHTML: 100,
          duration: 2,
          ease: customEase,
          snap: { innerHTML: 1 },
        });
      },
    });
    gsap.to("#container", {
      clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: customEase,
      delay: 3,
      onStart: () => {
        gsap.to("#info", {
          opacity: 1,
          clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: customEase,
        });
        gsap.to("#progressBar", {
          opacity: 0,
          duration: 0.3,
        });
      },
      onComplete: () => {
        onIsLoading();
        gsap.to("#container", {
          display: "none",
          duration: 0.3,
        });
      },
    });
  }, [onIsLoading]);

  return (
    <>
      <div
        className="relative w-[100vw] h-[100svh] flex justify-between flex-col will-change-clip-path bg-[#15161b]"
        id="container"
      >
        <div
          className="absolute top-[50%] left-0 -translate-y-[50%] lg:w-[25vw] sm:w-[30vw] w-[29vw] sm:p-[2em] p-2 flex justify-between items-center text-purple-600"
          id="progressBar"
        >
          <p className="font-moonDance md:text-5xl text-xl">loading</p>
          <p className="font-moonDance md:text-4xl text-xl">
            <span id="counter">0</span> %
          </p>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
