import React from "react";

import Logo from "../assets/logo.png";

import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="2xl:px-9 xl:px-6 lg:px-4 px-2 py-20">
      <div className="flex flex-cols-3 flex-wrap gap-8 w-full justify-center items-center">
        <div className="justify-start items-start w-auto">
          <img src={Logo} className="items-start" alt="Footer Logo" />
          <p className="cpregular mt-4 items-start font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="justify-center items-center w-1/3">
          <ul className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <li className="cpregular hover:text-primary hover:drop-shadow-sm font-semibold">
              <Link to="Homepage" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className="cpregular hover:text-primary hover:drop-shadow-sm font-semibold">
              <Link to="Services" smooth={true} duration={500}>
                SERVICES
              </Link>
            </li>
            <li className="cpregular hover:text-primary hover:drop-shadow-sm font-semibold">
              <Link to="Works" smooth={true} duration={500}>
                WORKS
              </Link>
            </li>
            <li className="cpregular hover:text-primary hover:drop-shadow-sm font-semibold">
              <Link to="CTA" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="items-end">
          <ul className="flex flex-col items-center lg:items-end justify-end">
            <li className="cpregular font-normal">Kathmandu, Nepal</li>
            <li className="cpregular font-normal">contact@utopia.com</li>
            <li className="cpregular font-normal">+91 9812345678</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
