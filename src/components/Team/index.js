import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";

import img5 from "../../images/União 220.png";
import teamMember from "../../images/team member.png";
import twitterImg from "../../images/layer1.png";
import linkedInImg from "../../images/Subtraction 18.png";

const teamMembers = [
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  {
    name: "Person Name",
    title: "Founder & CEO",
    imgSrc: teamMember,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.linkedin.com",
  },
  // Add additional team members as needed
];

const Heading = () => (
  <div className="my-8 text-center text-3xl font-bold lg:my-24 lg:text-6xl">
    <h1 className="flex justify-center">
      Meet our Team
      <img src={img5} alt="star" className="h-4 lg:h-8 ml-2" />
    </h1>
    <p className="my-2 text-base font-extralight text-slate-400 lg:text-xl">
      Creators, designers, and world-class problem solvers
    </p>
  </div>
);

const TeamSection = () => {
  return (
    <div className="mx-auto mb-12 flex max-w-[62rem] flex-wrap justify-center gap-4 lg:mb-32">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex h-[192px] w-[360px] items-center gap-6 rounded-3xl border border-slate-700 bg-[#16173c] p-4 lg:h-[254px] lg:w-[460px]"
        >
          <div className="flex h-[11rem] w-[340px] bg-cover items-end justify-center rounded-xl bg-[#8842D8] lg:h-[192px] lg:w-[360px]">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="h-[10rem] w-[18rem] pt-4 lg:h-[12rem] lg:w-[20rem]"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 lg:gap-4">
            <div className="flex flex-col">
              <h2 className="lg:text-1xl text-xl font-semibold">
                {member.name}
              </h2>
              <p className="text-sm font-extralight italic text-slate-400">
                {member.title}
              </p>
              <p className="text-sm font-extralight text-slate-300">
                {member.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-4">
                <div className="rounded-lg border border-slate-700 p-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedInImg}
                      alt="LinkedIn Icon"
                      className="w-4 lg:w-6"
                    />
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="rounded-lg border border-slate-700 p-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={twitterImg}
                      alt="LinkedIn Icon"
                      className="w-4 lg:w-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Team = () => {
  return (
    <div className="min-h-max text-white  bg-[#0A0B32] absolute inset-0 -z-50">
      <NavBar /> {/* Navbar*/}
      <Heading /> {/* heading section */}
      <TeamSection /> {/* team members */}
      <Footer /> {/* footer section */}
    </div>
  );
};

export default Team;
