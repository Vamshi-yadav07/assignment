import React from "react";
import img7 from "../../images/sparkle.png";
import firstImg from "../../images/Grupo 166873.png";
import secondImg from "../../images/Grupo 166885.png";
import thirdImg from "../../images/Grupo 166889.png";
import fourthImg from "../../images/Grupo 166896.png";
import fifthImg from "../../images/Grupo 166899.png";

const steps = [
  {
    title: "Data Normalization",
    description:
      "Our process kicks off with automated data normalization, where SpendCraft’s sophisticated algorithms cleanse and normalize your vendor and item data with precision.",
    description1:
      "This ensures consistent, reliable data ready for accurate classification, eliminating manual effort while reducing errors.",
    imgSrc: firstImg,
    buttonLabel: "Start Free Trial",
    buttonLink: "",
  },
  {
    title: "AI-Powered Training Data Generation",
    description:
      "Next, SpendCraft harnesses advanced AI agents based on Generative AI and large language models to automatically generate training datasets.",
    description1:
      "These AI agents analyze your existing data, creating comprehensive training datasets crucial for precise classification.",
    imgSrc: secondImg,
    buttonLabel: "Talk With Us",
    buttonLink: "",
  },
  {
    title: "Self-Service Classification",
    description:
      "With normalized data and generated training datasets, SpendCraft empowers you with a self-service classification tool. Our intuitive platform allows users to classify spending data effortlessly.",
    description1:
      "Whether you're an analyst or a business user, SpendCraft’s user- friendly interface makes spend classification straightforward and efficient.",
    imgSrc: thirdImg,
    buttonLabel: "Book a Demo",
    buttonLink: "",
  },
  {
    title: "Flexible Taxonomy",
    description:
      "SpendCraft’s flexible approach to taxonomy ensures our product adapts seamlessly to your organization’s needs.",
    description1:
      "Whether you have an established taxonomy or need a more adaptable system, SpendCraft supports both predefined and flexible taxonomies, ensuring alignment with your organizational structure and goals.",
    imgSrc: fourthImg,
    buttonLabel: "Get Started",
    buttonLink: "",
  },
  {
    title: "Unleash the Power of SpendCraft",
    description:
      "At SpendCraft, we’re redefining what’s possible in spend management. Powered by the Crafter platform, our innovative product delivers unparalleled accuracy,efficiency, and flexibility in spend classification.",
    description1:
      "Harness the power of advanced AI and automation with SpendCraft, and set a new standard for spend management.",
    imgSrc: fifthImg,
    buttonLabel: "Book a Demo",
    buttonLink: "",
  },
];

const DevelopmentStage = () => {
  return (
    <div className="my-26 flex flex-col gap-6 xl:gap-20">
      {steps.map((step, index) => (
        <div key={index}>
          {/* for desktop version */}
          <div
            className={`mx-auto  justify-center gap-8 flex-row hidden w-full max-w-[80rem] lg:flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex w-[30rem] items-center justify-center">
              <img
                src={step.imgSrc}
                alt="step image"
                className="h-[16rem] w-[18rem]"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="relative rounded-xl bg-gradient-to-b from-[#AA6DEF] to-[#5D21D1] px-4 py-2 text-2xl font-bold">
                {index + 1}
                <div
                  className={`absolute left-1/2 right-1/2 top-[100%] h-[450px] lg:h-[380px] w-[1px] border-b-[0px] border-l-[0px] border-t-[0px] border-4 border-dotted border-slate-700 ${
                    index === 4 ? "hidden" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex w-[30rem] flex-col gap-6 rounded-3xl border border-slate-700 bg-[#16173c] px-8 py-10">
              <h1 className="text-2xl lg:text-4xl font-semibold">
                {step.title}
              </h1>

              <p className="flex justify-start items-start gap-2 text-xs md:text-sm font-light text-slate-300">
                <img src={img7} alt="icon" className="w-4 h-4 mt-1" />
                {step.description}
              </p>
              <p className="flex justify-start items-start gap-2 text-xs md:text-sm font-light text-slate-300">
                <img src={img7} alt="icon" className="w-4 h-4 mt-1" />
                {step.description1}
              </p>
              <div className="flex justify-start ">
                <a
                  href={step.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 h-9 px-4 py-2 bg-slate-600 text-white items-center">
                    {step.buttonLabel}
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* for mobile version*/}
          <div className="mx-auto flex w-[20rem] justify-center gap-4 lg:hidden">
            <div className="flex flex-col items-center gap-4">
              <div className="flex rounded-xl bg-gradient-to-b from-[#AA6DEF] to-[#5D21D1] px-4 py-2 text-2xl font-bold">
                {index + 1}
              </div>

              <div
                className={`${
                  index === 4 ? "hidden" : ""
                } w-[2px] h-[520px]   border-b-[0px] border-l-[0px] border-t-[0px]  flex-1 border-4 border-dotted border-slate-700`}
              ></div>
            </div>
            <div className="flex w-[30rem] flex-col gap-4 rounded-3xl border border-slate-700 bg-[#16173c] p-4">
              <h1 className="text-2xl font-bold">{step.title}</h1>
              <p className="flex items-start text-left gap-1 text-sm font-light text-slate-300">
                <img src={img7} alt="icon" className="w-4 h-4 mt-1" />
                {step.description}
              </p>
              <p className="flex items-start text-left gap-1 text-sm font-light text-slate-300">
                <img src={img7} alt="icon" className="w-4 h-4 mt-1" />
                {step.description1}
              </p>
              <div className="flex justify-start">
                <a
                  href={step.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 h-9 px-4 py-2 bg-slate-600 text-white items-center">
                    {step.buttonLabel}
                  </button>
                </a>
              </div>
              <div>
                <img src={step.imgSrc} alt="img" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevelopmentStage;
