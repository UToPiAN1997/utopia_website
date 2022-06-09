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
    <div classname="hero">
      <div className="2xl:mx-72 xl:mx-16 lg:px-12 md:px-14 sm:px-2 flex flex-cols-2 group justify-center md:mx-0 sm:mx-2 items-center md:pt-20 pt-10 align-middle xl:flex-nowrap flex-wrap-reverse 2xl:gap-12">
        <div className="flex flex-col justify-center transition items-start 2xl:w-full lg:w-full"> 
          <h1 className="text-h2 text-textblack font-black">
            FROM A <span className="text-primary">THOUGHT</span> TO AN{" "}
            <span className="text-primary">IDEA</span>
            <br /> <span className="text-primary">BUILD</span> YOUR DIGITAL
            WORLD
          </h1>
          <p className="cpregular font-normal mt-4 ">
            From an idea to brand, from brand to a product, from product to
            success
          </p>
          <div className="mt-4">
            <button className="text-white font-h4 font-bold group hover:transition bg-primary px-6 py-3 flex items-center gap-2">
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
              className="mt-28 animate-float duration-200"
              src={Heroimage}
              alt="Hero Background"
            />
          </div>
          <div className="z-0 justify-center items-center 2xl:w-full xl:w-1/4">
            <Lottie options={defaultOptions} height={800} width={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
