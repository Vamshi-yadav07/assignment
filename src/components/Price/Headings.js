import React from "react";
import img7 from "../../images/sparkle.png";
import img5 from "../../images/União 220.png";
import logoImage from "../../images/Grupo 166851.png";

const Headings = () => {
  return (
    <div className="my-8 flex flex-col items-center text-center text-3xl font-bold lg:my-24 lg:text-6xl">
      <div>
        <img src={logoImage} alt="logo image" className="mb-2 h-20" />
      </div>
      <h1 className="flex justify-center">
        Tailored Plans for you
        <img src={img5} alt="star" className="h-4 lg:h-8 ml-2" />
      </h1>
      <p className="mx-auto my-2 text-base font-extralight lg:w-[65%] lg:text-xl text-slate-300">
        Inject efficiency and intuitiveness into your financial data management
        and classification processes with SpendCraft in a few simple steps, and
        gain actionable insights from clean and classified data.
      </p>
    </div>
  );
};

export default Headings;
