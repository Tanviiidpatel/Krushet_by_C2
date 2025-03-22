import React from "react";

const HowItWorks = () => {
  return (
    <section className="max-w-[1351px] mx-auto my-12 text-center px-5">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works?</h2>
      
      <div className="flex flex-col md:flex-row justify-between gap-5">

        <div className="flex-1 bg-white rounded-xl p-5 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
          <img
            src="/assets/images/add_your_crop.webp"
            alt="Add Crops"
            className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Add Your Crops</h3>
          <p className="text-gray-600 text-base">List your crops with images, descriptions, and pricing.</p>
        </div>

        <div className="flex-1 bg-white rounded-xl p-5 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
          <img
            src="/assets/images/connet_with_buyers.webp"
            alt="Connect with Buyers"
            className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Connect with Buyers</h3>
          <p className="text-gray-600 text-base">Find and connect directly with buyers for fresh produce.</p>
        </div>

        <div className="flex-1 bg-white rounded-xl p-5 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
          <img
            src="/assets/images/confirm_and_sale.webp"
            alt="Confirm & Sell"
            className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Confirm & Sell</h3>
          <p className="text-gray-600 text-base">Receive orders, confirm transactions, and get paid.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;