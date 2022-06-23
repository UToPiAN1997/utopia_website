import React, { useEffect, useState } from "react";

// import components
import TestiSlider from "./Testislider";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section group 2xl:px-72 xl:px-16 lg:px-12 md:px-14 sm:px-2"
    >
      <div className="sm:mx-0 mx-2 group-hover:animate-fade-in-up">
        <h2 className="cheader2 font-bold text-left">
          SOME OF OUR <span className="text-primary">TESTIMONIALS</span>
        </h2>
        <p className="cpregular font-normal mt-2">
          Here are some testimonials after some successful projects.
        </p>
      </div>
      <div className="mt-12 ">
        <div className="flex flex-col items-center text-center"></div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
