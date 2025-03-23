import React from 'react';
import { heroImage } from '../../assets/images';

function Farmer_dash_hero() {
  return (
    <div className="relative w-full h-[600px] mt-0"> {/* Increased height and set margin top to 0 */}
      {/* Hero Image */}
      <img 
        src={heroImage} 
        alt="Farmer Dashboard" 
        className="object-cover w-full h-full" 
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Heading and Subheading */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Krushet</h1>
        <p className="text-xl">Empowering farmers with tools for better productivity and management</p>
      </div>
    </div>
  );
}

export default Farmer_dash_hero;
