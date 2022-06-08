import { Herobg, Herooverlay } from "./urlFilePath";

import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Techstack from "./components/Techstack";
import Works from "./components/Works";

function App() {
  return (
    <div className="App overflow-hidden">
      <div>
        <div className="relative min-h-screen">
          <img
            className="w-full fixed -z-50 bg-center"
            src={Herobg}
            alt="Hero Background"
          />
          <img
            className="absolute bottom-0 -z-40"
            src={Herooverlay}
            alt="Hero Overlay"
          />
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="h-full bg-white">
        <Services />
      </div>
      <div className="h-full bg-white">
        <Techstack />
      </div>
      <div className="h-screen bg-white">
        <Works />
      </div>
    </div>
  );
}

export default App;
