import React from 'react'
import img5 from "../../images/União 220.png";
import logoImage from "../../images/Grupo 166851.png";

const Titlesection = () => {
  return (
    <div>
      <div className="my-8 flex flex-col items-center text-center text-3xl font-bold lg:my-24 lg:text-6xl">
        <div>
          <img src={logoImage} alt="logo image" className="mb-2 h-20" />
        </div>
        <h1 className="flex justify-center">
          How SpendCraft Works
          <img src={img5} alt="star" className="h-4 lg:h-8 ml-2" />
        </h1>
        <p className="mx-auto my-2 text-base font-extralight lg:w-[65%] lg:text-xl text-slate-300">
          Our patent-pending technology puts you in control of your data, from
          cleansing and normalizing to classification and analysis, with AI
          assisting every step. It offers unmatched flexibility, allowing you to
          reclassify data or adopt new taxonomies instantly—all without
          technical intervention.
        </p>
      </div>
    </div>
  )
}

export default Titlesection
