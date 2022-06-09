import React from "react";

// testimonials data
import { testimonials } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const TestiSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const {
            mockupImg,
            authorImg,
            authorText,
            authorName,
            authorPosition,
          } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 bg-gradient-to-b from-transparent to-transparent p-16 rounded-xl">
                <div className="animate-float">
                  <img src={mockupImg} className="" alt="" />
                </div>
                <div className="flex flex-col h-auto justify-center items-center">
                  <div className="bg-accent items-center p-8 rounded-xl">
                    <div className="flex flex-row">
                      <div className="w-20 h-20">
                        <img className="rounded-full" src={authorImg} alt="" />
                      </div>
                      <div className="ml-4">
                        <h1 className="text-h4 text-textblack">{authorName}</h1>
                        <h1 className="text-pl font-normal">
                          {authorPosition}
                        </h1>
                      </div>
                    </div>
                    <p className="text-pr mt-4 italic font-normal">
                      {authorText}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;
