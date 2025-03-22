import React from "react";
import { howItWork } from "../../../assets/images";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[15%] gap-[5rem] mt-[5rem]">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mx-auto">
          <img
            src={howItWork} // Replace with your image URL
            alt="How It Works"
            className="w-[33vw] h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-6xl font-bold text-gray-800">How it works</h2>
          <p className="text-lg text-gray-600 mt-2 w-[25vw]">
            Krushet makes it easy to support farmers and earn sustainable
            returns. Here's how it works:
          </p>
          <button className="w-[25vw] mt-8 px-6 py-3 bg-green-500 text-white rounded-md  hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
      {/* some links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-[10%] m-[5rem]">
      {/* Benefit 1 */}
      <button className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
        <FaSearch />
        <span className="block mt-4 text-lg font-semibold text-gray-800">
          Explore our marketplace
        </span>
        <p className="text-gray-600">
          Browse through local farmers and their investment needs.
        </p>
      </button>

      {/* Benefit 2 */}
      <button className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
        <FaArrowRight />
        <span className="block mt-4 text-lg font-semibold text-gray-800">
          Select a farmer to support
        </span>
        <p className="text-gray-600">
          Review detailed information about each farmer and their farming methods.
        </p>
      </button>

      {/* Benefit 3 */}
      <button className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
        <FaArrowRight />
        <span className="block mt-4 text-lg font-semibold text-gray-800">
          Ask AI about Investment
        </span>
        <p className="text-gray-600">
          Leverage AI to get personalized investment advice based on the specific needs and goals of farmers.
        </p>
      </button>

      {/* Benefit 4 */}
      <button className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
        <FaArrowRight />
        <span className="block mt-4 text-lg font-semibold text-gray-800">
          Receive sustainable returns
        </span>
        <p className="text-gray-600">
          Get paid annually based on the success of the farming season.
        </p>
      </button>
    </div>
    </>
  );
};

export default HowItWorks;
