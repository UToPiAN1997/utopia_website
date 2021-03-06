import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/rocket.json";

import { FaBars, FaInstagram } from "react-icons/fa";

import { HiArrowNarrowRight } from "react-icons/hi";

const CTA = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="2xl:mx-60 xl:mx-16 lg:px-12 md:px-14 sm:px-2 py-20 group">
      <div className="flex flex-cols-2 flex-wrap lg:flex-nowrap gap-4">
        <div className="flex 3xl:w-1/2 2xl:w-1/2 xl:w-2/5 lg:w-2/5 md:w-full sm:w-full">
          <Lottie options={defaultOptions} height={750} width={750} />
        </div>
        <div className="flex flex-col justify-center group-hover:animate-fade-in-up w-full">
          <h2 className="cheader2 font-extrabold capitalize text-left">
            READY TO LAUNCH YOUR <span className="text-primary">PRODUCT?</span>
            <br />
            <span className="text-primary">LET'S</span> BE IN TOUCH
          </h2>
          <form className="flex flex-col mt-4">
            <div className="mt-2 flex flex-wrap w-full relative h-14 bg-white border-2 border-accent  items-center mb-4 focus:border-bluegradient1 focus:border-2">
              <input
                type="text"
                className="py-2 px-4 focus:outline-none border-none flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light rounded rounded-l-none self-center relative cplarge"
                placeholder="Name"
              />
            </div>
            <div className="mt-2 flex flex-wrap w-full relative h-14 bg-white border-2 border-accent  items-center mb-4 focus:border-bluegradient1 focus:border-2">
              <input
                type="text"
                className="py-2 px-4 focus:outline-none border-none flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light rounded rounded-l-none self-center relative cplarge"
                placeholder="Email"
              />
            </div>
            <div className="mt-2 flex flex-wrap w-full relative h-14 bg-white border-2 border-accent  items-center mb-4 focus:border-bluegradient1 focus:border-2">
              <input
                type="text"
                className="py-2 px-4 focus:outline-none border-none flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light rounded rounded-l-none self-center relative cplarge"
                placeholder="Subject"
              />
            </div>
            <div className="mt-4">
              <button className="text-white hover:outline hover:outline-2 hover:outline-primary rounded-sm cheader4 font-normal bg-gradient-to-b from-primary to-secondary hover:drop-shadow-lg px-6 py-2 flex items-center gap-2">
                Submit
                <span className="">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTA;
