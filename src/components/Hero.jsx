import { Heroimage } from "../urlFilePath";

import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/hero-animation.json";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";

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
    <div classname="hero ">
      <div className="group 2xl:px-72 xl:px-16 lg:px-12 md:px-14 sm:px-2 flex flex-cols-2 justify-center md:mx-0 sm:mx-2 items-center md:pt-20 pt-10 align-middle xl:flex-nowrap flex-wrap 2xl:gap-12">
        <div className="flex flex-col justify-center transition items-start 2xl:w-full lg:w-full group-hover:animate-fade-in-up sm:mt-14">
          <h1 className="cheader1 text-textblack font-bold">
            FROM A <span className="text-primary">THOUGHT</span> TO AN
            <span className="text-primary"> IDEA </span>
            BUILD YOUR DIGITAL <span className="text-primary"> WORLD</span>
          </h1>
          <p className="cpregular font-normal mt-4 ">
            From an idea to brand, from brand to a product, from product to
            success
          </p>
          <div className="mt-4">
            <Link to="CTA" smooth={true} duration={500}>
              <button className="text-white hover:outline hover:outline-2 hover:outline-primary rounded-sm cheader4 font-normal bg-gradient-to-b from-primary to-secondary hover:drop-shadow-lg px-6 py-2 flex items-center gap-2">
                Contact
                <span className="">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative justify-center items-center">
          <div className="absolute z-10 justify-center items-center">
            <img
              className="mt-28 animate-float duration-200 drop-shadow-2xl"
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
