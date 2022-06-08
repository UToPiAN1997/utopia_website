import React from "react";
import Projects from "./Projects";

const Works = () => {
  return (
    <div className="2xl:mx-72 py-20">
      <div>
        <h2 className="text-h2 font-extrabold text-left">
          <span className="text-primary">Ideas </span>
          We Have Brought To <span className="text-primary">Reality</span>
        </h2>
        <p className="text-pr font-normal mt-2">
          There are no limits to creation whether be it logo, UI, UX, website,
          mobile application, photo manipulation, vector illustration and even
          more. The main aim is to create and make the impossible possible.
        </p>
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default Works;
