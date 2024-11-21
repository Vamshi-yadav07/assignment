import React from "react";
import img4 from "../../images/image.png";
import img5 from "../../images/União 220.png";

import { SecondaryButton, DemoButton } from "./index";

const FirstSection = () => (
  <div className="my-6 lg:my-12 flex flex-col items-center text-white">
    <div className="flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl lg:gap-4 font-bold font-Clinton">
      <h1>Control</h1>
      <img src={img4} alt="hand-img" className="h-9" />
      <h1>Spend</h1>
    </div>
    <div className="flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-Clinton leading-[1.5]">
      <h1>with data Gen AI</h1>
      <img src={img5} alt="star 1" className="h-5 lg:h-6" />
    </div>
    <div className="w-[95%] md:w-2/3 lg:w-1/2 text-center lg:text-xl mt-4">
      <p className="text-base md:text-xl font-normal text-slate-400">
        Experience the power of automated training dataset generation and
        self-service, powered by the advanced Crafter platform.
      </p>
    </div>
    <div className="flex gap-1 lg:gap-4 mt-4">
      <DemoButton text="Book a Demo" />
      <SecondaryButton text="Talk With Us" />
    </div>
  </div>
);

export default FirstSection;
