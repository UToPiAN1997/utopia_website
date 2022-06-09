import React from "react";
import Projects from "./Projects";

const Works = () => {
  return (
    <div className="py-20 group">
      <div className="2xl:mx-72">
        <h2 className="text-h2 font-extrabold text-left">
          <span className="text-primary">IDEAS </span>
          WE HAVE BROUGHT TO <span className="text-primary">REALITY</span>
        </h2>
        <p className="text-pr font-normal mt-2">
          There are no limits to creation whether be it logo, UI, UX, website,
          mobile application, photo manipulation, vector illustration and even
          more. The main aim is to create and make the impossible possible.
        </p>
      </div>
      <div className="group-hover:animate-fade-in-up">
        <Projects />
      </div>
    </div>
  );
};

export default Works;
