import { Herobg, Herooverlay } from "./urlFilePath";

import React from "react";

import Lottie from "react-lottie";
import animationData from "../src/lotties/city-animation.json";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Techstack from "./components/Techstack";
import Works from "./components/Works";
import Wall from "./components/Wall";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="App overflow-hidden">
      <section title="Homepage" id="Homepage">
        <div className="relative min-h-screen">
          <img
            className="w-full h-full fixed -z-50 bg-center cover"
            src={Herobg}
            alt="Hero Background"
          />
          <img
            className="absolute bottom-0 -z-40"
            src={Herooverlay}
            alt="Hero Overlay"
          />
          {/* <div className="absolute justify-center bottom-0 z-20">
            <Lottie options={defaultOptions} height={108} width={3840} />
          </div> */}
          <Navbar />
          <Hero />
        </div>
      </section>
      <section title="Services" id="Services" className="h-full bg-white">
        <Services />
      </section>
      <section title="Techstack" className="h-full bg-white">
        <Techstack />
      </section>
      <section title="Works" id="Works" className="bg-white">
        <Works />
      </section>
      <section title="Testimonials" className="h-full bg-white">
        <Testimonials />
      </section>
      {/* <div className="h-full bg-white">
        <Wall />
      </div> */}
      <section title="CTA" id="CTA" className="h-full bg-white">
        <CTA />
      </section>
      <section title="Footer" className="h-full bg-white">
        <Footer />
      </section>
    </div>
  );
}

export default App;
