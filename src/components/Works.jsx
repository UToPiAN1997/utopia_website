import React from "react";
import Projects from "./Projects";

const Works = () => {
  return (
    <div className="2xl:px-64 xl:px-16 lg:px-12 md:px-0 sm:px-2 py-20 group">
      <div className="px-2 md:px-6 group-hover:animate-fade-in-up">
        <h2 className="cheader2 font-bold text-left ">
          <span className="text-primary">IDEAS </span>
          WE HAVE BROUGHT TO <span className="text-primary">REALITY</span>
        </h2>
        <p className="cpregular font-normal mt-2">
          There are no limits to creation whether be it logo, UI, UX, website,
          mobile application, photo manipulation, vector illustration and even
          more. The main aim is to create and make the impossible possible.
        </p>
      </div>
      <div className=" px-2 md:px-6">
        <Projects />
      </div>
    </div>
  );
};

export default Works;
