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
    <div className="2xl:mx-72 py-20">
      <h2 className="text-h2 font-extrabold text-center">
        <span className="text-primary">Tools </span>
        And <span className="text-primary">Technologies</span> Designed For
        Creating Competative <span className="text-primary">Products</span>
      </h2>
      <div className="flex flex-row justify-center gap-12 mt-20">
        <div className="p-8 bg-white hover:bg-accent">
          <img
            src={Figmaicon}
            className="h-14 w-auto justify-center items-center"
            alt="Figma Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent">
          <img
            src={Jsicon}
            className="h-14 w-auto justify-center items-center"
            alt="JS Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent">
          <img
            src={Reacticon}
            className="h-14 w-auto justify-center items-center"
            alt="React Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent">
          <img
            src={Nodejsicon}
            className="h-14 w-auto justify-center items-center"
            alt="Nodejs Icon"
          />
        </div>
        <div className="p-8 bg-white hover:bg-accent">
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
