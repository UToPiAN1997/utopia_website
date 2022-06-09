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
      <div className="2xl:px-72 py-20">
        <div className="flex flex-col-2 flex-wrap-reverse group">
          <div className="flex-row w-1/2">
            <h2 className="text-h2 text-textblack font-extrabold">
              BRAINSTORMING A <span className="text-primary">CREATION</span>{" "}
              <br />
              FROM <span className="text-primary">DESIGN</span>, TO
              <span className="text-primary"> DEVELOPMENT</span>
            </h2>
            <p className="text-pr font-normal mt-2">
              There are no limits to creation whether be it logo, UI, UX,
              website, mobile application, photo manipulation, vector
              illustration and even more. The main aim is to create and make the
              impossible possible.
            </p>
            <div className="flex mt-6">
              <div className="grid lg:grid-cols-2 md:grid-row-2 gap-6 group-hover:animate-fade-in-up">
                <div className="bg-gradient-to-b from-transparent to-accent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="bg-white rounded-full h-auto w-auto p-6">
                      <img
                        src={Designicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack text-pl font-extrabold uppercase">
                      Design
                    </h1>
                  </div>
                  <p className="text-pr font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
                <div className="bg-gradient-to-b from-transparent to-accent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="bg-white rounded-full h-auto w-auto p-6">
                      <img
                        src={Webdevicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack font-extrabold text-pl uppercase">
                      Web Development
                    </h1>
                  </div>
                  <p className="text-pr font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
                <div className="bg-gradient-to-b from-transparent to-accent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="bg-white rounded-full h-auto w-auto p-6">
                      <img
                        src={Mobileicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack font-extrabold text-pl uppercase">
                      Mobile Development
                    </h1>
                  </div>
                  <p className="text-pr font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
                <div className="bg-gradient-to-b from-transparent to-accent w-auto h-auto px-8 py-12 rounded-xl">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="bg-white rounded-full h-auto w-auto p-6">
                      <img
                        src={Brandicon}
                        className="h-auto w-auto animate-wiggle"
                        alt="Design Icon"
                      />
                    </div>
                    <h1 className="text-textblack font-extrabold text-pl uppercase">
                      Brand Identity
                    </h1>
                  </div>
                  <p className="text-pr font-normal mt-4">
                    -Branding -Logo Design -UI Design -UX Design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Lottie options={defaultOptions} height={750} width={750} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
