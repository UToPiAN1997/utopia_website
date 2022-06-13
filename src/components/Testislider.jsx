import React from "react";

// testimonials data
import { testimonials } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const TestiSlider = () => {
  return (
    <>
      <Swiper
        navigation
        speed={700}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
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
                  <img src={mockupImg} className="drop-shadow-lg" alt="" />
                </div>
                <div className="flex flex-col h-auto justify-center items-center">
                  <div className="bg-accent items-center p-8 rounded-xl">
                    <div className="flex flex-row">
                      <div className="w-20 h-20">
                        <img className="rounded-full" src={authorImg} alt="" />
                      </div>
                      <div className="ml-4">
                        <h1 className="cheader4 font-semibold text-textblack">
                          {authorName}
                        </h1>
                        <h1 className="cpregular font-medium">
                          {authorPosition}
                        </h1>
                      </div>
                    </div>
                    <p className="pregular mt-4 italic font-normal">
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
