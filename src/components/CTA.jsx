import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/rocket.json";

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
    <div className="3xl:mx-96 2xl:mx-72 xl:mx-16 lg:px-12 md:px-14 sm:px-2 py-20">
      <div className="flex flex-cols-2 flex-wrap lg:flex-nowrap gap-4">
        <div className="flex 2xl:w-full xl:w-2/5 lg:w-2/5 md:w-full sm:w-full">
          <Lottie options={defaultOptions} height={750} width={750} />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-h2 font-extrabold capitalize text-left">
            READY TO LAUNCH YOUR <span className="text-primary">PRODUCT?</span>
            <br />
            <span className="text-primary">WE</span> ARE HERE FOR YOU
          </h2>
          <form className="flex flex-col mt-4">
            <div className="mt-2 flex flex-wrap w-full relative h-14 bg-white border-2 border-gray-300  items-center mb-4 focus:border-bluegradient1 focus:border-2">
              
              <input
                type="text"
                className="py-2 px-4 focus:outline-none border-none flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light rounded rounded-l-none self-center relative text-pl"
                placeholder="Name"
              />
            </div>
            <div className="mt-2 flex flex-wrap w-full relative h-14 bg-white border-2 border-gray-300  items-center mb-4 focus:border-bluegradient1 focus:border-2">
              
              <input
                type="text"
                className="py-2 px-4 focus:outline-none border-none flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light rounded rounded-l-none self-center relative text-pl"
                placeholder="Email"
              />
            </div>
            <div className="mt-2 flex flex-wrap w-full relative h-14 bg-white border-2 border-gray-300  items-center mb-4 focus:border-bluegradient1 focus:border-2">
              
              <input
                type="text"
                className="py-2 px-4 focus:outline-none border-none flex-shrink flex-grow leading-normal w-px flex-1 h-10 border-grey-light rounded rounded-l-none self-center relative text-pl"
                placeholder="Subject"
              />
            </div>
            <div className="mt-4">
              <button className="text-white font-h4 font-bold group hover:transition bg-primary px-6 py-3 flex items-center gap-4">
                Contact
                <span className="group-hover:translate-x-2 group-hover:duration-200">
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
