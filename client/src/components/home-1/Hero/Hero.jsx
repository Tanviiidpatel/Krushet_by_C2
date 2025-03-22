import React from "react";
import heroImage from "../../../assets/images/hero2.webp"; // Import the image properly

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white text-center px-5">
      
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}

      ></div>

      <h1 className="text-4xl md:text-5xl font-bold mb-5 relative z-10">
        Your Crop, Your Profit – Empowering Farmers with Technology
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl leading-relaxed relative z-10">
        Seamless crop selling, direct buyer connections, and fair pricing – powered by technology to boost your earnings. Khruset is a platform dedicated to bridging the gap between farmers, buyers, and NGOs by enabling direct sales, eliminating middlemen, and ensuring fair trade for all stakeholders.
      </p>
    </div>
  );
};

export default Hero;