import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";

import contactImg from "../../images/contactImg.png";
import mailImg from "../../images/Exclusão 143.png";
import callImg from "../../images/Exclusão 142.png";
import locationImg from "../../images/Subtração 419.png";

const contactDetails = [
  {
    id: 1,
    title: "Message Us",
    info: "info@spendcraft.com",
    icon: mailImg,
    alt: "Email Icon",
  },
  {
    id: 2,
    title: "Location",
    info: "Dallas, TX, USA",
    icon: locationImg,
    alt: "Location Icon",
  },
  {
    id: 3,
    title: "Call Us",
    info: "(12) 345-6789",
    icon: callImg,
    alt: "Location Icon",
  },
];

const ContactInfo = () => {
  return (
    <div className="mx-auto px-3 my-14 flex max-w-[80rem] flex-col gap-4 lg:my-32 lg:flex-row lg:gap-20">
      {contactDetails.map((detail) => (
        <div
          key={detail.id}
          className="flex flex-1 gap-4 rounded-xl bg-gradient-to-b from-[#5D21D1] to-[#8842D8] p-4 lg:flex-col lg:gap-8"
        >
          <div>
            <img src={detail.icon} alt={detail.alt} className="w-10" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-lg font-semibold">{detail.title}</h2>
            <p className="text-white">{detail.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="mx-auto px-2 flex h-full max-w-[80rem] items-start gap-4">
      <div className="h-full flex-1 mt-1">
        <form className="relative flex flex-col gap-4">
          {/* Full Name and Email Fields */}
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative w-full">
              <span className="absolute left-[4%] top-[6%] text-sm font-light">
                Full Name *
              </span>
              <input
                className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-slate-700 bg-[#16173E] pb-6 pt-10 outline-0"
                required
                name="fullname"
              />
            </div>
            <div className="relative w-full">
              <span className="absolute left-[4%] top-[6%] text-sm font-light">
                Email Address *
              </span>
              <input
                className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-slate-700 bg-[#16173E] pb-6 pt-10 outline-0"
                required
                type="email"
                name="email"
              />
            </div>
          </div>

          {/* Company Name and Phone Number Fields */}
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative w-full">
              <span className="absolute left-[4%] top-[6%] text-sm font-light">
                Company Name
              </span>
              <input
                className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-slate-700 bg-[#16173E] pb-6 pt-10 outline-0"
                name="companyname"
              />
            </div>
            <div className="relative w-full">
              <span className="absolute left-[4%] top-[6%] text-sm font-light">
                Phone Number *
              </span>
              <input
                className="flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-slate-700 bg-[#16173E] pb-6 pt-10 outline-0"
                required
                type="tel"
                name="phone"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <span className="absolute left-[2%] top-[4%] text-base font-extralight">
              Message
            </span>
            <textarea
              className="flex min-h-[60px] w-full rounded-md border px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border-slate-700 bg-[#16173E] pt-10 outline-0"
              rows="7"
              name="description"
              style={{ height: "255px" }}
            />
          </div>

          {/* Submit Button */}
          <button
            className="inline-flex absolute right-3 bottom-3  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 ml-auto mt-4 w-40 border border-[#A65EED] bg-gradient-to-b from-[#AA6DEF] to-[#5D21D1] hover:bg-gradient-to-r"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Image Section for larger screens */}
      <div className="hidden flex-1 lg:block">
        <img src={contactImg} alt="Contact" className="h-full w-full" />
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="min-h-max text-white  bg-[#0A0B32] absolute inset-0 -z-50">
      <NavBar />
      <div className="my-8 text-center text-3xl font-bold lg:my-24 lg:text-6xl">
        <h1>Get in Touch</h1>
        <p className="mx-auto mt-3 px-2 text-base font-extralight lg:mt-6 lg:w-1/2 lg:text-xl">
          Connect with Us – Your Gateway to Seamless Communication! Our team is
          eager to provide you with a personalized consultation at no cost.
        </p>
      </div>
      {ContactForm()}
      {ContactInfo()}
      <Footer />
    </div>
  );
};

export default ContactUs;
