import React from "react";
import { DemoButton } from "./index";
import img5 from "../../images/União 220.png";
import setIcon1 from "../../images/chart.png";
import setIcon2 from "../../images/path0 (2).png";
import setIcon3 from "../../images/União 49.png";
import setIcon4 from "../../images/Subtração 8.png";
import trackIcon1 from "../../images/Subtração 423.png";
import trackIcon2 from "../../images/svgg (1).png";
import trackIcon3 from "../../images/svgg.png";
import trackIcon4 from "../../images/path0 (3).png";
import efficiency from "../../images/efficiency img.jpg";

const setsItems = [
  {
    color: "#64CCC1",
    icon: setIcon1,
    alt: "hero-icon",
    subtitle: "Total",
    text: "11 sets",
  },
  {
    color: "#2563eb",
    icon: setIcon2,
    alt: "hero-icon",
    subtitle: "Configured",
    text: "4 sets",
  },
  {
    color: "#f59e0b",
    icon: setIcon3,
    alt: "hero-icon",
    subtitle: "In Progress",
    text: "7 sets",
  },
  {
    color: "#d946ef",
    icon: setIcon4,
    alt: "hero-icon",
    subtitle: "Yet to Start",
    text: "4 sets",
  },
];

const trackingItems = [
  {
    color: "#28C978",
    icon: trackIcon1,
    alt: "track-icon",
    subtitle: "Spend",
    text: "848 mi",
  },
  {
    color: "#ea580c",
    icon: trackIcon2,
    alt: "track-icon",
    subtitle: "Vendors",
    text: "7.4 mil",
  },
  {
    color: "#b91c1c",
    icon: trackIcon3,
    alt: "track-icon",
    subtitle: "SKUS",
    text: "18 mil",
  },
  {
    color: "#1d4ed8",
    icon: trackIcon4,
    alt: "track-icon",
    subtitle: "Transactions",
    text: "583 mil",
  },
];

const CardItem = ({ title, items }) => (
  <div>
    <p className="ml-4 text-left">{title}</p>
    <div className="flex flex-col gap-4 rounded-lg bg-[#0A0B32] px-4 py-7 shadow-md">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 rounded-xl bg-[#16173E] py-1 pl-2 pr-10 lg:py-2 lg:pr-20"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg px-2 py-1"
            style={{ backgroundColor: item.color }}
          >
            <img src={item.icon} alt={item.alt} className="w-4" />
          </div>
          <div>
            <p className="text-[8px] flex space-x-2 font-extralight lg:text-[8px]">
              {item.subtitle}
            </p>
            <p className="text-[6px] flex space-x-2 font-semibold lg:text-sm whitespace-nowrap">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DiscoverySection = () => {
  return (
    <div className="p-3.5 py-4 font-Clinton text-white m-auto w-[90%] md:w-3/4 lg:w-[85%] bg-[#9891910f] border border-slate-800 rounded-lg my-12 lg:my-24 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center">
        <h1 className="font-Clinton font-bold text-xl sm:text-3xl sm:flex-col lg:text-4xl order-2">
          Discover the Power
        </h1>
        <img src={img5} alt="star" className="w-4 lg:w-6 md:order-2" />
      </div>
      <p className="w-full lg:w-1/2 text-center my-4 text-base md:text-xl text-slate-400">
        Harness Gen AI for transformative spend management by automating data
        normalization and training dataset generation.
      </p>
      <DemoButton text="Start 7 Days Free Trial" />
      <div className="my-8 flex flex-row justify-center gap-4 lg:flex-row">
        <CardItem title="Sets" items={setsItems} />
        <div className="hidden lg:block">
          <p className="ml-4 text-left ">Efficiency</p>
          <div className="w-[36rem]  rounded-md shadow-md">
            <img src={efficiency} alt="Efficiency image" />
          </div>
        </div>
        <CardItem title="Tracking" items={trackingItems} />
      </div>
    </div>
  );
};

export default DiscoverySection;
