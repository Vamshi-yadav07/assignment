import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import currenImg from "../../images/Grupo 167042.png";
import commingsoonImg from "../../images/Grupo 167037.png";
import timeline1 from "../../images/Clip path group.png";
import timelinedot1 from "../../images/Grupo 167040.png";
import timelinedot2 from "../../images/Grupo 167039.png";
import checkmark from "../../images/checkmark.png";

const roadmapData = [
  {
    title: "Sep 2024",
    imgSrc: currenImg,
    release: "Release #01:",
    features: [
      "File Uploads & Downloads",
      "Pre-Built Analytics",
      "Self-Service",
      "Automated Normalization",
      "Automated Training Data",
      "Level 3 & 4",
      "Taxonomy updates",
    ],
    bgColor: "bg-[#16173E]",
    borderColor: "border-slate-700",
  },
  {
    title: "End of 2024",
    imgSrc: commingsoonImg,
    release: "Release #02:",
    features: [
      "Fraud Detection",
      "Savings Opportunities",
      "Oracle & Workday Integrations",
      "Bring Your Own Taxonomy",
      "Enhanced Data Normalization",
    ],
    bgColor: "",
    borderColor: "border-[#323060]",
  },
  {
    title: "2025",
    imgSrc: commingsoonImg,
    release: "Release #03:",
    features: [
      "Enhanced Fraud Detection",
      "Self-Service Analytics",
      "Purchasing Analytics",
      "Netsuite, SAP Integration",
      "Additional Reports",
    ],
    bgColor: "",
    borderColor: "border-[#323060]",
  },
];

const Roadmap = () => {
  return (
    <div className="mx-auto mb-14 max-w-[80rem] lg:mb-40">
      <h1 className="mb-12 text-center text-3xl font-bold lg:text-6xl">
        Spend Craft Roadmap
      </h1>

      {/* Top Images Row */}
      <div className="mx-auto my-12 hidden w-[57%] items-center justify-between gap-4 lg:flex">
        <img src={timelinedot1} alt="img" className="w-4" />
        <img src={timeline1} alt="img" className="h-2 w-4 flex-1" />
        <img src={timelinedot2} alt="img" className="w-4" />
        <img src={timeline1} alt="img" className="h-2 w-4 flex-1" />
        <img src={timelinedot2} alt="img" className="w-4" />
      </div>

      {/* for desktop version */}
      <div className=" hidden lg:flex justify-center gap-8 lg:mx-32 flex-row lg:gap-16">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`relative flex-1 rounded-3xl border ${item.borderColor} ${item.bgColor} p-8 shadow-xl`}
          >
            <div className="absolute -top-[1%] left-[22%] md:left-[26%]">
              <img src={item.imgSrc} alt="price" className="w-36" />
            </div>
            <div className="flex justify-center">
              <h2 className="text-4xl font-bold">{item.title}</h2>
            </div>
            <div className="mt-10 h-[1px] bg-slate-700"></div>
            <div className="mt-4 flex flex-col gap-2 text-sm lg:gap-4">
              <p>{item.release}</p>
              {item.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <img src={checkmark} alt="price-tick" className="w-6" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* for mobile version */}
      <div className="lg:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={4} // Default space between slides for small screens
          slidesPerView={1.1}
          style={{ height: "500px" }}
          className="custom-swiper"
          breakpoints={{
            // Medium screens (e.g., tablets)
            500: {
              slidesPerView: 1.5,
              spaceBetween: 2,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 2,
            },

            768: {
              slidesPerView: 2.5,
              spaceBetween: 10, // Decreased space for a tighter fit
            },
          }}
        >
          
            {roadmapData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className={`relative mx-3 flex-1 rounded-3xl max-w-[330px] h-full max-h-[440px] self-stretch border ${item.borderColor} ${item.bgColor} p-8 shadow-xl`}
                >
                  <div className="absolute -top-[1%] left-1/2 transform -translate-x-1/2 z-10">
                    <img src={item.imgSrc} alt="price" className="w-36" />
                  </div>
                  <div className="flex justify-center">
                    <h2 className="text-4xl font-bold">{item.title}</h2>
                  </div>
                  <div className="mt-10 h-[1px] bg-slate-700"></div>
                  <div className="mt-4 flex flex-col gap-2 text-sm lg:gap-4">
                    <p>{item.release}</p>
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <img src={checkmark} alt="price-tick" className="w-6" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
       
        </Swiper>
      </div>
    </div>
  );
};

export default Roadmap;
