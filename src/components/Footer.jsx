import React from "react";

import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="3xl:mx-96 2xl:mx-72 xl:mx-16 lg:px-12 py-20">
      <div className="flex flex-cols-3 gap-12">
        <div className="justify-start">
          <img src={Logo} className="items-start" alt="Footer Logo" />
          <p className="font-normal mt-4 items-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="justify-center">
          <ul className="flex flex-row items-center">
            <li className="text-pr font-semibold">HOME</li>
            <li className="text-pr font-semibold">SERVICES</li>
            <li className="text-pr font-semibold">WORKS</li>
            <li className="text-pr font-semibold">CONTACT</li>
          </ul>
        </div>
        <div className=" justify-end">
          <ul className="flex flex-col items-end">
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
