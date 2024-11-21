import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import Headings from "./Headings";
import Plans from "./Plans";
import TalkWithUs from "./TalkWithUs";






const Pricing = () => {
  return (
    <div className="min-h-max px-2 text-white  bg-[#0A0B32] absolute inset-0 -z-50">
      <NavBar />
      <Headings />
      <Plans />
      <TalkWithUs />
      <Footer />
    </div>
  );
};

export default Pricing;
