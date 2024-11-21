import React from "react";
import whitelogo from "../../images/Grupo 166844.png";
import bglogo from "../../images/Interseção 23.png";
import whiteStar from "../../images/União 221.png";

const ExperienceFuture = () => {
  return (
    <div className="relative mx-auto my-14  flex max-w-[80rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-xl bg-gradient-to-b from-[#5D21D1] to-[#8842D8] py-10 lg:my-40 lg:gap-6 lg:py-20">
      <div className="absolute">
        <img src={bglogo} alt="bg" />
      </div>

      <div>
        <img src={whitelogo} alt="icon" />
      </div>

      <div className="text-center text-2xl font-bold lg:text-6xl">
        <h1 className="flex items-center justify-center">
          Experience the future
          <img src={whiteStar} alt="star" className="h-4 lg:h-10 ml-2" />
        </h1>
      </div>

      <div className="w-[90%] font-light lg:w-[56%] lg:text-2xl text-center">
        <p>
          Experience the power of automated training dataset generation and
          self-service classification, powered by the advanced Crafter platform.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="inline-flex text-md items-center justify-center whitespace-nowrap rounded-md font-medium  shadow hover:bg-primary/90 h-9 px-4 py-2 z-10 border-2 border-solid border-[#a87fe7]  bg-[#9c6de1] ">
          Start 7 Days Free Trial
        </button>
      </div>
    </div>
  );
};

export default ExperienceFuture;
