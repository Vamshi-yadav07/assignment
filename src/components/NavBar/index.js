import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/bgimage.png";
import img2 from "../../images/Grupo 166784.png";
import userImg from "../../images/account.png";
import menuImg from "../../images/Grupo 165343.png";

const NavBar = () => {
  return (
    <div className="text-white">
      <div className="absolute inset-0 -z-10">
        <img src={img1} alt="bgImage" className="w-full" />
      </div>
      <nav className="z-10 flex h-16 items-center justify-between px-4 py-3 lg:px-8 xl:px-24">
        <div>
          <Link to="/">
            <img src={img2} alt="logo" className="w-36 lg:min-w-44" />
          </Link>
        </div>
        <ul className="hidden lg:flex lg:gap-10 xl:gap-15">
          <li>
            <Link to="/mechanism">
              <h3>Mechanism</h3>
            </Link>
          </li>
          <li>
            <Link to="/team">
              <h3>Team</h3>
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <h3>Pricing</h3>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <h3>Blog</h3>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h3>Contact</h3>
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex gap-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 bg-slate-800 hover:bg-slate-600">
            Login
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 border border-[#A65EED] bg-gradient-to-b from-[#AA6DEF] to-[#5D21D1] hover:bg-gradient-to-r">
            Get Started
          </button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <div className="border-solid border-slate-600 rounded-full border-2 p-1 ">
            <img src={userImg} alt="user" />
          </div>
          <div className="border-solid border-slate-600 rounded-full border-2 p-1 ">
            <img src={menuImg} alt="menu bar" />
          </div>
        </div>
      </nav>
      <div className="absolute left-0 right-0 h-[1px] bg-slate-700"></div>
    </div>
  );
};

export default NavBar;
