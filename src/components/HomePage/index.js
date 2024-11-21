import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import FirstSection from "./FirstSection";
import IconGroup from "./IconGroup";
import PlatformTrail from "./PlatformTrail";

import img4 from "../../images/image.png";
import img5 from "../../images/União 220.png";
import img7 from "../../images/sparkle.png";
import img8 from "../../images/União 75.png";
import img6 from "../../images/finger-pressing-smartphone-screen 1.png";
import img9 from "../../images/section2.1.png";
import compatibilityImg from "../../images/Retângulo 150544 1 (1).png";
import subtractionImg from "../../images/Subtraction 7.png";
import DiscoverySection from "./DiscoverySection";

export const DemoButton = ({ text }) => (
  <button className="mr-2 inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 border border-[#A65EED] bg-gradient-to-b from-[#AA6DEF] to-[#5D21D1] hover:bg-gradient-to-r">
    {text}
  </button>
);

export const SecondaryButton = ({ text }) => (
  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 bg-slate-800 hover:bg-slate-600">
    {text}
  </button>
);

const ThirdSection = () => (
  <div className="my-14 flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:my-40 lg:gap-20">
    <div className="lg:min-w-[33rem]">
      <img
        src={img6}
        alt="img"
        className="w-[20rem] h-[15rem] object-cover  lg:w-[33rem] lg:h-auto rounded-3xl"
      />
    </div>
    <TextSection
      title="Unlock Savings"
      icon={img8}
      benefits={[
        "Zero Implementation Cost",
        "Automated Data Normalization",
        "Re-Classify at your will",
        "Pre-Built Dashboards and Reports",
      ]}
      buttonText="Book a Demo"
    />
  </div>
);

const TextSection = ({ title, icon, benefits, buttonText }) => (
  <div className="flex flex-col gap-4 lg:gap-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-[#AA6DEF] to-[#5D21D1]">
      <img src={icon} alt="icon" className="w-4" />
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl">
      {title}
    </h1>
    {benefits.map((benefit, index) => (
      <p
        key={index}
        className="flex items-center gap-2 text-sm md:text-lg font-light lg:text-xl"
      >
        <img src={img7} alt="icon" className="w-3.5 h-3.5 mt-1" />
        {benefit}
      </p>
    ))}
    <DemoButton text={buttonText} />
  </div>
);

const HomePage = () => (
  <div className="min-h-max text-white bg-[#0A0B32] absolute inset-0 -z-50">
    <NavBar />
    <IconGroup />
    <FirstSection />
    <DiscoverySection />
    <ThirdSection />
    <PlatformTrail />
    <Footer />
  </div>
);

export default HomePage;
