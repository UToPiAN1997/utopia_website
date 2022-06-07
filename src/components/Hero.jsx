import { Heroimage } from "../urlFilePath";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="flex flex-col-2 w-full h-screen">
      <div className="flex flex-row-2 justify-center items-center md:ml-72">
        <div className="w-1/2 mx-auto flex flex-col justify-center h-full">
          <h1 className="font-h1 text-3xl sm:text-4xl font-extrabold">
            From A Thought To An Idea
            <br /> Build Your Digital Word
          </h1>
          <p className="font-pr font-normal text-sm sm:text-xl mt-4">
            From Idea to brand, from brand to a product, from product to success
          </p>
          <div className="mt-6">
            <button className="text-white font-h4 font-bold group hover:border-gray-500 bg-primary px-6 py-3 flex items-center gap-4">
              Contact
              <span className="group-hover:translate-x-2 group-hover:duration-200">
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-full h-auto justify-center items-center hover:scale-110 duration-200"
            src={Heroimage}
            alt="Hero Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
