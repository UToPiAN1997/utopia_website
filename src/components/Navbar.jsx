import React, { useState, useEffect } from "react";
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
import { Link, animateScroll as scroll } from "react-scroll";
import "../components/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="fixed z-50 2xl:px-72 xl:px-16 lg:px-12 w-full h-[80px] flex bg-gradient-to-b from-accent to-transparent justify-between items-center px-4 text-black">
        <div>
          <Link to="Homepage" smooth={true} duration={500}>
            <img className="h-full w-auto" src={Logo} alt="Logo Image" />
          </Link>
        </div>
        <ul className="hidden md:flex items-center">
          <li className="cpregular font-semibold">
            <Link to="Homepage" smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className="cpregular font-semibold">
            <Link to="Services" smooth={true} duration={500}>
              SERVICES
            </Link>
          </li>
          <li className="cpregular font-semibold">
            <Link to="Works" smooth={true} duration={500}>
              WORKS
            </Link>
          </li>
          <li className="cpregular font-semibold">
            <Link to="CTA" smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
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
          <li className="font-pl py-6 text-3xl">HOME</li>
          <li className="font-pl py-6 text-3xl">SERVICES</li>
          <li className="font-pl py-6 text-3xl">WORKS</li>
          <li className="font-pl py-6 text-3xl">CONTACT</li>
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
    </div>
  );
}

export default Navbar;
