import { Heroimage } from "../urlFilePath";

import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/hero-animation.json";

import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div classname="hero min-h-screen">
      <div className="flex flex-cols-2 justify-center items-center md:pt-20 pt-10 align-middle flex-wrap-reverse gap-12 ">
        <div className="flex flex-col justify-center lg:ml-36">
          <h1 className="text-h1 text-textblack font-black">
            From A <span className="text-primary">Thought</span> To An{" "}
            <span className="text-primary">Idea</span>
            <br /> <span className="text-primary">Build</span> Your Digital Word
          </h1>
          <p className="cpregular font-normal mt-4">
            From an idea to brand, from brand to a product, from product to
            success
          </p>
          <div className="mt-4">
            <button className="text-white font-h4 font-bold group hover:transition bg-primary px-6 py-3 flex items-center gap-4">
              Contact
              <span className="group-hover:translate-x-2 group-hover:duration-200">
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="relative justify-center items-center">
          <div className="absolute z-10 justify-center items-center">
            <img
              className="mt-28 hover:scale-105 duration-200 "
              src={Heroimage}
              alt="Hero Background"
            />
          </div>
          <div className=" z-0 justify-center items-center">
            <Lottie options={defaultOptions} height={800} width={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
