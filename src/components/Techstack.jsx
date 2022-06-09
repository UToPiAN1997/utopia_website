import {
  Figmaicon,
  Jsicon,
  Reacticon,
  Nodejsicon,
  Npmicon,
} from "../urlFilePath";

import React from "react";

const Techstack = () => {
  return (
    <div className="3xl:mx-96 2xl:mx-72 xl:mx-16 lg:px-12 md:px-14 sm:px-2 py-20 group">
      <h2 className="text-h2 font-extrabold text-start">
        <span className="text-primary">TOOLS </span>
        AND <span className="text-primary">TECHNOLOGIES</span> DESIGNED FOR
        CREATING COMPETITIVE <span className="text-primary">PRODUCTS</span>
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-12 mt-20">
        <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-down">
          <img
            src={Figmaicon}
            className="h-14 w-auto justify-center items-center"
            alt="Figma Icon"
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
        <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-up">
          <img
            src={Nodejsicon}
            className="h-14 w-auto justify-center items-center"
            alt="Nodejs Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent group-hover:animate-fade-in-down">
          <img
            src={Npmicon}
            className="w-14 h-auto justify-center items-center"
            alt="Npm Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
