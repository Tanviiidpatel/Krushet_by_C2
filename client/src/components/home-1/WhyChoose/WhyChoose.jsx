import React from "react";
import whyChoose from "../../../assets/images/why_choose_krushet.webp";

const benefits = [
  { icon: "🚜", title: "Professional Farmers", text: "Ensuring quality produce with sustainable farming techniques." },
  { icon: "🥦", title: "Fresh Vegetables", text: "Directly sourced from farms to keep them fresh and healthy." },
  { icon: "🌾", title: "Agriculture Products", text: "Wide range of organic and natural farm products available." },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#f8f8eb] py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Benefits Section - 3 Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl flex flex-col items-center text-center shadow-md transition-all hover:shadow-lg h-40"
            >
              <span className="text-3xl bg-yellow-400 p-3 rounded-full">{benefit.icon}</span>
              <h3 className="text-lg font-semibold text-green-600 mt-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Image & Description Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image Section */}
          <div className="relative">
            <img
              src={whyChoose}
              alt="Why Choose Krushet"
              className="w-full max-w-md rounded-xl shadow-md h-64 object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-yellow-400 text-gray-800 p-3 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">+435*</h3>
              <p className="text-sm font-medium">Growth Tons of Harvest</p>
            </div>
          </div>

          {/* Right: Description Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose <span className="text-green-600">Krushet?</span>
            </h2>
            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              Krushet bridges the gap between farmers and consumers by providing direct access to 
              fresh and affordable produce. We eliminate middlemen, ensuring that farmers get 
              better profits while consumers, NGOs, and hotels receive high-quality goods at a 
              reduced cost. Our mission is to create a sustainable and efficient food distribution 
              system.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
