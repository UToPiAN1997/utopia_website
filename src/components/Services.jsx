import { Designicon, Webdevicon, Mobileicon, Brandicon } from "../urlFilePath";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/brainstorm-animation.json";

const Services = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div class="Services">
      <div className="2xl:px-72 xl:px-16 lg:px-12 md:px-14 sm:px-2 py-20">
        <div className="flex flex-col-2 flex-wrap group">
          <div className="flex-row w-full xl:w-1/2 sm:w-full">
            <div className="group-hover:animate-fade-in-up">
              <h2 className="cheader2 text-textblack font-bold">
                BRAINSTORMING A <span className="text-primary">CREATION</span>{" "}
                <br />
                FROM <span className="text-primary">DESIGN</span>, TO
                <span className="text-primary"> DEVELOPMENT</span>
              </h2>
              <p className="cpregular font-normal mt-2">
                There are no limits to creation whether be it logo, UI, UX,
                website, mobile application, photo manipulation, vector
                illustration and even more. The main aim is to create and make
                the impossible possible.
              </p>
            </div>
            <div className="flex mt-6">
              <div className="grid md:grid-cols-2 md:grid-row-2 gap-6">
                <div className="bg-gradient-to-b from-transparent to-transparent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 flex-wrap items-center">
                    <div className="bg-gradient-to-b from-secondary to-primary rounded-full h-auto w-auto p-6">
                      <img
                        src={Designicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack cplarge font-extrabold uppercase">
                      Design
                    </h1>
                  </div>
                  <p className="cpregular font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
                <div className="bg-gradient-to-b from-transparent to-transparent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="bg-primary rounded-full h-auto w-auto p-6">
                      <img
                        src={Webdevicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack cplarge font-extrabold uppercase">
                      Web Development
                    </h1>
                  </div>
                  <p className="cpregular font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
                <div className="bg-gradient-to-b from-transparent to-transparent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="bg-primary rounded-full h-auto w-auto p-6">
                      <img
                        src={Mobileicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack cplarge font-extrabold uppercase">
                      Mobile Development
                    </h1>
                  </div>
                  <p className="cpregular font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
                <div className="bg-gradient-to-b from-transparent to-transparent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="bg-primary rounded-full h-auto w-auto p-6">
                      <img
                        src={Brandicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack cplarge font-extrabold uppercase">
                      Brand Identity
                    </h1>
                  </div>
                  <p className="cpregular font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full hidden xl:flex">
            <Lottie options={defaultOptions} height={750} width={750} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
