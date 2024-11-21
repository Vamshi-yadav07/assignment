import React from "react";
import contactImg from "../../images/Subtraction 9.png";
import gmailImg from "../../images/Subtraction 12.png";
import twitterImg from "../../images/layer1.png";
import linkedInImg from "../../images/Subtraction 18.png";

const IconGroup = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-3 lg:mt-14">
      <div className="flex w-3/4 sm:w-2/4 gap-2 lg:gap-4 lg:w-[293px] justify-center items-center">
        {[contactImg, gmailImg, twitterImg, linkedInImg].map((icon, index) => (
          <div
            key={index}
            className="border-solid border-slate-600 rounded-xl border-2 p-1 lg:h-14 h-8 w-8 lg:w-14 flex justify-center items-center"
          >
            <img src={icon} alt="icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGroup;
