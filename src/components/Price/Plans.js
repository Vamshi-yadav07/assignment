import React from "react";
import checkmark from "../../images/checkmark.png";
import mostPopImg from "../../images/most pop.png";

const roadmapData = [
  {
    title: "Basic",
    imgSrc: "",
    release: "Plan includes",
    features: [
      ["3 prototypes", ""],
      ["3 boards", ""],
      ["Up to 5 team members", ""],
      ["Advanced Security", "line-through"],
      ["Issue escalation", "line-through"],
      ["Issue Development license", "line-through"],
      ["Permission & workflows", "line-through"],
    ],
    bgColor: "bg-[#0A0B32]",
    borderColor: "border-slate-700",
    buttonTxt: "Start 7 Days Free Trial",
    cost: 0,
  },
  {
    title: "Smart",
    imgSrc: mostPopImg,
    release: "Plan includes",
    features: [
      ["3 prototypes", ""],
      ["3 boards", ""],
      ["Up to 5 team members", ""],
      ["Advanced Security", ""],
      ["Issue escalation", "line-through"],
      ["Issue Development license", "line-through"],
      ["Permission & workflows", "line-through"],
    ],
    bgColor: "bg-[#16173E]",
    borderColor: "border-slate-800",
    buttonTxt: "Choose Starter",
    cost: 499,
  },
  {
    title: "Premium",
    imgSrc: "",
    release: "Plan includes",
    features: [
      ["3 prototypes", ""],
      ["3 boards", ""],
      ["Up to 5 team members", ""],
      ["Advanced Security", ""],
      ["Issue escalation", ""],
      ["Issue Development license", ""],
      ["Permission & workflows", ""],
    ],
    bgColor: "bg-gradient-to-r from-[#5D21D1] to-[#8842D8]",
    borderColor: "border-purple-500",
    buttonTxt: "Contact Sale",
    cost: 999,
  },
];

const Plans = () => {
  return (
    <div className=" flex flex-col   m-auto items-center lg:flex-row lg:justify-center  gap-8 lg:mx-32  lg:gap-16">
      {roadmapData.map((item, index) => (
        <div
          key={index}
          className={`relative flex-1 rounded-3xl border ${item.borderColor} ${item.bgColor} w-auto h-[511px] lg:h-[500px] lg:w-[500px] p-8 shadow-xl`}
        >
          {item.imgSrc && (
            <div className="absolute -top-[2%] left-[25%]  lg:left-[32%]">
              <img src={item.imgSrc} alt="price" className="w-32" />
            </div>
          )}
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">{item.title}</h2>
            <div>
              <h3 className="text-2xl">${item.cost}</h3>
              <span className="text-sm opacity-45">/monthly</span>
            </div>
          </div>
          <div className="mt-10 h-[1px] bg-slate-700"></div>
          <div className="mt-4 flex flex-col gap-2 text-sm lg:gap-4">
            <p>{item.release}</p>
            {item.features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 ${
                  feature[1] ? "line-through opacity-45" : ""
                }`}
              >
                <img src={checkmark} alt="price-tick" className="w-6" />
                <p>{feature[0]}</p>
              </div>
            ))}
          </div>
          <div className="flex py-1 justify-center font-normal bg-slate-200 text-md text-slate-700 mt-4 rounded-full">
            <button>{item.buttonTxt}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
