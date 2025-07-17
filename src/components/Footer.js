import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="w-full bg-[#4CECD6] flex justify-around ">
      <div className="flex flex-col items-center md:flex-row m-14">
        <Link to="/">
          <img src={logo} className="rounded-full h-14" alt="Logo" />
        </Link>

        <p className="font-bold text-2xl sm:text-3xl mt-2 md:mt-0 md:ml-4 cursor-pointer">
          <Link to="/">Vincent Therapies</Link>
        </p>
      </div>
      <div className="mt-14 mb-8">
        <p className="font-bold text-xl">Quick Links</p>
        <p className="m-2 cursor-pointer hover:underline"> <a href='/about'>About </a></p>
        <p className="m-2 cursor-pointer hover:underline"><a href='/contact'>Contact </a></p>
        <p className="m-2 cursor-pointer hover:underline"><a href='/services'>Services </a></p>
      </div>
      <div className="mt-14 mb-8">
        <p className="font-bold text-xl">Connect With Me</p>
        <div className="flex items-center m-3">
          <FaLinkedin className="text-5xl text-white" />

          <span className="mx-4 cursor-pointer hover:underline">
            <a
              href="https://www.linkedin.com/in/roshan-vincent-3068695b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>
        </div>
        <div className="flex items-center m-3 ">
          <IoIosMail className="text-5xl text-white" />
          <a href="mailto:roshan.vincent@behavioraltherapist.co.uk">
            <span className="mx-4 cursor-pointer hover:underline">
              roshan.vincent@behavioraltherapist.co.uk
            </span>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
