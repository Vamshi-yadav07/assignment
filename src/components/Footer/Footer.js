import React from "react";
import { Link } from "react-router-dom";
import gmailImg from "../../images/Subtraction 12.png";
import linkedInImg from "../../images/Subtraction 18.png";
import insta from "../../images/Caminho 140.png";
import facebook from "../../images/União 222.png";
import twitter from "../../images/layer1.png";
import logo from "../../images/Grupo 166844.png";
import contact from "../../images/Subtraction 9.png";

const companyLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Team", path: "/team" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/spendcraft",
    imgSrc: linkedInImg,
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://twitter.com/spendcraft",
    imgSrc: twitter,
  },
  {
    id: 3,
    name: "Facebook",
    href: "https://www.facebook.com/spendcraft",
    imgSrc: facebook,
  },
  {
    id: 4,
    name: "Instagram",
    href: "https://www.instagram.com/spendcraft",
    imgSrc: insta,
  },
];

const Footer = () => {
  return (
    <footer className=" mb-4 mt-8 rounded-3xl border border-slate-700 bg-[#16173c] px-4 pt-4 font-extralight lg:mx-6 lg:px-20 lg:pt-28">
      <div className="flex flex-wrap justify-between gap-12">
        {/* Contact Info */}
        <ul className="flex flex-col gap-6">
          <li className="font-bold">Talk With Us</li>
          <li className="flex gap-2">
            <div className="rounded-lg border border-slate-700 p-2">
              <img src={gmailImg} alt="icon" className="w-4" />
            </div>
            <div>
              <a href="">info@spendcraft.com</a>
            </div>
          </li>
          <li className="flex gap-2">
            <div className="rounded-lg border border-slate-700 p-2">
              <img src={contact} alt="icon" className="w-4" />
            </div>
            <div>
              <a href="">contact@spendcraft.com</a>
            </div>
          </li>
        </ul>

        {/* Company Links */}
        <ul className="flex flex-col gap-6">
          <li className="font-bold">Company</li>
          {companyLinks.map((link) => (
            <li key={link.id} className="hover:text-[#A65EED]">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Resources Links */}
        <ul className="flex flex-col gap-6">
          <li className="font-bold">Resources</li>
          <li className="hover:text-[#A65EED]">
            <a href="/mechanism">Mechanism</a>
          </li>
          <li className="hover:text-[#A65EED]">
            <a href="https://app.spendcraft.com/auth/firebase/register">
              Register
            </a>
          </li>
          <li className="hover:text-[#A65EED]">
            <a href="https://app.spendcraft.com/auth/firebase/login?returnTo=%2Fdashboard">
              Login
            </a>
          </li>
        </ul>

        {/* Social Media Links */}
        <ul className="flex flex-col gap-6">
          <li className="font-bold">Follow Us</li>
          <ul className="flex gap-2">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <div className="flex gap-2">
                  <div className="rounded-lg border border-slate-700 p-2 w-10 flex items-center justify-center">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.imgSrc}
                        alt={`${link.name} icon`}
                        className=" h-6"
                      />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ul>
      </div>

      {/* Footer Bottom Section */}
      <div className="mb-4 mt-10 flex flex-wrap justify-between lg:mt-44">
        <div>SpendCraft © Copyright 2024</div>
        <div>
          <img src={logo} alt="icon" className="w-6" />
        </div>
        <div>Privacy Policy | Terms of Service</div>
      </div>
    </footer>
  );
};

export default Footer;
