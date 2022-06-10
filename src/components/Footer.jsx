import React from "react";

import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="2xl:px-9 xl:px-6 lg:px-4 px-2 py-20">
      <div className="flex flex-cols-3 flex-wrap gap-8 w-full justify-center items-center">
        <div className="justify-start items-start w-auto">
          <img src={Logo} className="items-start" alt="Footer Logo" />
          <p className="font-normal mt-4 items-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="justify-center items-center w-1/3">
          <ul className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <li className="text-pr font-semibold">HOME</li>
            <li className="text-pr font-semibold">SERVICES</li>
            <li className="text-pr font-semibold">WORKS</li>
            <li className="text-pr font-semibold">CONTACT</li>
          </ul>
        </div>
        <div className="items-end">
          <ul className="flex flex-col items-center lg:items-end justify-end">
            <li className="text-pr font-semibold">Kathmandu, Nepal</li>
            <li className="text-pr font-semibold">contact@utopia.com</li>
            <li className="text-pr font-semibold">+91 9812345678</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
