import React from "react";
import { buyerNgo, fairPrice, crowdFunding, directCropSelling, feactureBg } from "../../../assets/images.js";

export const features = [
  {
    image: directCropSelling,
    title: "Direct Crop Selling",
    description: "Farmers sell directly without middlemen.",
  },
  {
    image: buyerNgo,
    title: "Connect with Buyers & NGOs",
    description: "Direct marketplace for farmers and buyers.",
  },
  {
    image: fairPrice,
    title: "Fair Pricing & Transparent Payments",
    description: "Ensuring no hidden charges or unfair pricing.",
  },
  {
    image: crowdFunding,
    title: "Crowdfunding & Donations for Farmers",
    description: "NGOs and donors supporting farmers.",
  },
];

const FeatureSection = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${feactureBg})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Krushet: A Better Way Forward</h1>
      </div>

      {/* Features Grid */}
      <div className="bg-[#f8f8eb] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-64 object-contain rounded-md" />
              <h3 className="text-lg font-semibold text-green-600 mt-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
