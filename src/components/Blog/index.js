import React from "react";
import Blogs from "./Blogs";
import NavBar from "../NavBar/index";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div className="min-h-max text-white  bg-[#0A0B32] absolute inset-0 -z-50">
      <NavBar /> {/*   navbar */}
      <Blogs /> {/*   blogs and heading */}
      <Footer /> {/*  footer*/}
    </div>
  );
};

export default Blog;
