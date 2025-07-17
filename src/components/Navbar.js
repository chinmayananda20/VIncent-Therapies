import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#4CECD6] text-white">
      {/* Top row for mobile: hamburger */}
      <div className="flex justify-between items-center px-4 py-2 md:hidden">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Logo and title */}
      <div className="flex flex-col items-center md:flex-row md:justify-between md:px-4 md:py-4 md:h-20 mb-4 md:mb-0">
        <div className="flex flex-col items-center md:flex-row">
          <Link to="/">
            <img src={logo} className="rounded-full h-14" alt="Logo" />
          </Link>

          <p className="font-bold text-2xl sm:text-3xl mt-2 md:mt-0 md:ml-4 cursor-pointer">
            <Link to='/'>Vincent Therapies</Link>
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none font-bold text-lg">
          <li className="m-4 cursor-pointer hover:underline">Services</li>

          <li className="m-4 cursor-pointer hover:underline">
            <Link to="/about">About Me</Link>
          </li>
          <li className="m-4 cursor-pointer hover:underline">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center font-bold text-lg py-2 space-y-2">
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">
            <Link to="/about">About Me</Link>
          </li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
