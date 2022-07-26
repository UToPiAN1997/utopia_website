import {
  Figmaicon,
  Jsicon,
  Reacticon,
  Nodejsicon,
  Adobeicon,
} from "../urlFilePath";

import React from "react";

const Techstack = () => {
  return (
    <div className="group 2xl:mx-60 xl:mx-16 lg:px-12 md:px-14 sm:px-2 py-20 ">
      <h2 className="cheader2 font-bold text-start">
        <span className="text-primary">TOOLS </span>
        AND <span className="text-primary">TECHNOLOGIES</span> DESIGNED FOR
        CREATING COMPETITIVE <span className="text-primary">PRODUCTS</span>
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-12 mt-20">
        <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-up">
          <img
            src={Figmaicon}
            className="h-14 w-auto justify-center items-center"
            alt="Figma Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-down">
          <img
            src={Adobeicon}
            className="w-14 h-auto justify-center items-center"
            alt="Npm Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-up">
          <img
            src={Jsicon}
            className="h-14 w-auto justify-center items-center"
            alt="JS Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-down">
          <img
            src={Reacticon}
            className="h-14 w-auto justify-center items-center"
            alt="React Icon"
          />
        </div>
        {/* <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-up">
          <img
            src={Nodejsicon}
            className="h-14 w-auto justify-center items-center"
            alt="Nodejs Icon"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Techstack;
