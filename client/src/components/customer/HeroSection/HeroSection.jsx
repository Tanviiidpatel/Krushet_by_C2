import React from "react";
import { customerHeroSec } from "../../../assets/images";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      
      {/* Hero Image */}
      <img
        src={customerHeroSec}
        alt="Fresh Farm Produce"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content - Centered */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg leading-tight">
          Fresh from the Farm, Delivered to You 🚜
        </h2>
        <p className="text-lg sm:text-xl mt-4 opacity-90 max-w-2xl">
          Support local farmers and enjoy naturally grown, fresh produce.
        </p>
        <a  href="/consumer/shop"className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition">
          Shop Now
        </a>
      </div>
      
    </div>
  );
};

export default HeroSection;
