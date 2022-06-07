import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-50 md:px-72 w-full h-[80px] flex justify-between items-center px-4 bg-opacity-20 bg-white text-black">
      <div>
        <img className="h-full w-auto" src={Logo} alt="Logo Image" />
      </div>

      <ul className="hidden md:flex items-center">
        <li className="text-pr font-semibold">Home</li>
        <li className="text-pr font-semibold">Services</li>
        <li className="text-pr font-semibold">Works</li>
        <li className="text-pr font-semibold">Contact</li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute z-50 top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
        <li className="font-pl py-6 text-3xl">Home</li>
        <li className="font-pl py-6 text-3xl">Services</li>
        <li className="font-pl py-6 text-3xl">Works</li>
        <li className="font-pl py-6 text-3xl">Contact Us</li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="group w-40 h-12 flex justify-between items-center -ml-24 hover:-ml-3 duration-200 bg-transparent hover:bg-primary">
            <a
              className="flex justify-between items-center w-full text-gray-900 group-hover:text-white"
              href="/"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="group w-40 h-12 flex justify-between items-center -ml-24 hover:-ml-3 duration-200 bg-transparent hover:bg-primary">
            <a
              className="flex justify-between items-center w-full text-gray-900 group-hover:text-white"
              href="/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="group w-40 h-12 flex justify-between items-center -ml-24 hover:-ml-3 duration-200 bg-transparent hover:bg-primary">
            <a
              className="flex justify-between items-center w-full text-gray-900 group-hover:text-white"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
