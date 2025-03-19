"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface IWorkSliderBtns {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
  isBeginning: boolean;
  isEnd: boolean;
}

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconStyles,
  isBeginning,
  isEnd,
}: IWorkSliderBtns) => {
  const swiper = useSwiper();
  console.log(isBeginning);
  return (
    <>
      <div className={containerStyles}>
        <button
          className={`${btnStyles} ${
            isBeginning
              ? "bg-[#a281ac]"
              : "bg-[#cda3d8] hover:bg-[#ab81ca] hover:text-white"
          }`}
          disabled={isBeginning}
          onClick={() => swiper.slidePrev()}
        >
          <PiCaretLeftBold className={`${iconStyles}`} />
        </button>
        <button
          className={`${btnStyles}  ${
            isEnd
              ? "bg-[#a281ac]"
              : "bg-[#cda3d8] hover:bg-[#ab81ca] hover:text-white"
          }`}
          disabled={isEnd}
          onClick={() => swiper.slideNext()}
        >
          <PiCaretRightBold className={`${iconStyles}`} />
        </button>
      </div>
    </>
  );
};

export default WorkSliderBtns;
