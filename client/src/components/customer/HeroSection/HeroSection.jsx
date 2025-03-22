import React from "react";
//import heroImage from "/assets/customerherosec.png";
import { customerHeroSec } from "../../../assets/images";


const HeroSection = () => {
  return (
    <div className="flex justify-center items-center px-10 py-10">
      <div className="mt-10 relative w-full max-w-5xl rounded-lg overflow-hidden">
    
    
        <img
          src={customerHeroSec}
          alt="Fresh Fruits"
          className="w-full h-[400px] sm:h-[600px] md:h-[600px] object-cover rounded-lg"
        />

    
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

   
       <div className="absolute bottom-10 left-10 right-10 sm:left-16 sm:right-16 text-white text-center sm:text-left">
         <h2 className="text-3xl sm:text-4xl font-extrabold drop-shadow-lg">
           Shop directly from small farms
         </h2>
         <p className="text-lg sm:text-xl mt-2 opacity-90">
           Supporting local farmers and getting the freshest organic produce!
         </p>
        </div>
      </div>
   </div>

  );
};

export default HeroSection;
