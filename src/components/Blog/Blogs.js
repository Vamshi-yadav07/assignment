import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../../images/Grupo 166922.png";
import img8 from "../../images/União 220.png";

const blogPosts = [
  {
    title: "Premium",
    bio: "Saving $124 a year",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: "/blog/LXM",
  },
  {
    title: "Premium",
    bio: "Saving $124 a year",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: "/blog/LXM",
  },
  {
    title: "Premium",
    bio: "Saving $124 a year",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: "/blog/LXM",
  },
  {
    title: "Premium",
    bio: "Saving $124 a year",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: "/blog/LXM",
  },
];

const BlogCard = ({ title, bio, description, link }) => (
  <div className="flex h-[192px] w-[360px] items-center gap-6 rounded-3xl border border-slate-700 bg-[#16173c] p-4 lg:h-[254px] lg:w-[460px]">
    <div className="flex items-center">
      <Link to={link}>
        <img
          src={blogImg}
          alt="img"
          className="h-[150px] w-[576px] transition-all hover:scale-105 lg:h-[230px] lg:w-[760px]"
        />
      </Link>
    </div>
    <div className="flex flex-col justify-center gap-2 lg:gap-4">
      <div>
        <h2 className="lg:text-1xl text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-[10px]  font-extralight lg:text-sm leading-none italic text-slate-400">
        {bio}
      </p>
      <p className="text-[10px] font-extralight lg:text-sm text-slate-400">
        {description}
      </p>
      <div>
        <Link to={link}>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 border border-[#A65EED] bg-gradient-to-b from-[#AA6DEF] to-[#5D21D1] hover:bg-gradient-to-r">
            Primary
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  return (
    <div className="px-4 lg:px-8 xl:px-24">
      <div className="my-8 text-center text-3xl font-bold lg:my-24 lg:text-6xl">
        <h1 className="flex justify-center">
          Latest Blog
          <img src={img8} alt="star" className="h-4 lg:h-8" />
        </h1>
        <p className="my-2 text-base font-extralight lg:text-xl mt-5">
          Gain actionable insights from clean and classified data.
        </p>
      </div>

      <div className="mx-auto mb-12 flex max-w-[62rem] flex-wrap justify-center gap-4 lg:mb-32">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            bio={post.bio}
            description={post.description}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
