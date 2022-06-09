import React, { useEffect, useState } from "react";

// import components
import TestiSlider from "./Testislider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section group bg-secondary xl:mx-72">
      <div className="">
        <h2 className="text-h2 font-extrabold text-left">
          SOME OF OUR <span className="text-primary">TESTIMONIALS</span>
        </h2>
        <p className="text-pr font-normal mt-2">
          There are no limits to creation whether be it logo, UI, UX, website,
          mobile application, photo manipulation, vector illustration and even
          more. The main aim is to create and make the impossible possible.
        </p>
      </div>
      <div className="container mt-12 group-hover:animate-fade-in-up">
        <div className="flex flex-col items-center text-center"></div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
