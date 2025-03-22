import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide2 from "../../../assets/images/slide_1.webp";
import hero2 from "../../../assets/images/hero2.webp";
import slide1 from "../../../assets/images/slide_2.webp";

const Hero = () => {
  return (
<div className="relative w-[99%] mx-auto mt-2 overflow-hidden rounded-[30px] shadow-lg transition-all duration-300">
{/* Swiper Carousel */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-[100vh] flex items-center justify-center text-white">
            <img src={slide1} alt="Slide 1" className="absolute inset-0 w-full h-full object-cover rounded-[30px]" />
            <div className="absolute inset-0 bg-black opacity-30 rounded-[30px]"></div>
            <div className="z-10 text-center px-5">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Quality Trust: Direct to the Farm
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl mx-auto">
                We all need a little space to grow. Give yourself the space you need to find your inner you.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[100vh] flex items-center justify-center text-white">
            <img src={slide2} alt="Slide 2" className="absolute inset-0 w-full h-full object-cover rounded-[30px]" />
            <div className="absolute inset-0 bg-black opacity-30 rounded-[30px]"></div>
            <div className="z-10 text-center px-5">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Empowering Farmers with Technology
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl mx-auto">
                Seamless crop selling, direct buyer connections, and fair pricing.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[100vh] flex items-center justify-center text-white">
            <img src={hero2} alt="Slide 3" className="absolute inset-0 w-full h-full object-cover rounded-[30px]" />
            <div className="absolute inset-0 bg-black opacity-30 rounded-[30px]"></div>
            <div className="z-10 text-center px-5">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Connecting Farmers & Buyers
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl mx-auto">
                A transparent and fair trade platform for all stakeholders.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Curved Shape at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path fill="white" d="M0,256L1440,192L1440,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
