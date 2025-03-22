import React from 'react';
import { heroImage,heroBene1 } from '../../../assets/images.js';

const Hero = () => {
  return (
    <>
    <div className="relative h-screen px-[10%] pt-22">
      {/* Image */}
      <img
        src={heroImage} // Replace with your image URL
        alt="Hero"
        className="w-[80vw] h-[45vh] mx-auto object-cover rounded-2xl"
        />

      {/* Text on top of the image */}
      <div className="absolute top-[39%] left-[28%]  transform -translate-x-1/2 text-white ">
       <span className='text-[40px] font-bold'>Support farmers, earn returns</span> 
        <p>Invest in initial funding for crops and receive returns based on crop success.</p>
      </div>
      <div className=" text-left mt-6">
      {/* Heading and Text */}
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Why invest in farmers?</h2>
        <p className="text-lg text-gray-600 mb-3">
          Investments in farmers offer numerous benefits for your portfolio and the farming community.
        </p>
      </div>
      

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Benefit 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
          <img
            src={heroBene1} // Replace with actual image URL
            alt="Support Local Farmers"
            className="w-full h-[10rem] object-contain rounded-md"
          />
          <span className="block mt-4 text-lg font-semibold text-gray-800">
            Support Local Farmers
          </span>
          <p className="text-gray-600">
            Invest in the livelihood of local farmers and the community.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
          <img
            src={heroBene1}  // Replace with actual image URL
            alt="Preserve Agricultural Heritage"
            className="w-full h-[10rem] object-contain rounded-md"
          />
          <span className="block mt-4 text-lg font-semibold text-gray-800">
            Preserve Agricultural Heritage
          </span>
          <p className="text-gray-600">
            Preserve traditional farming methods and the agricultural landscape.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
          <img
            src={heroBene1}  // Replace with actual image URL
            alt="Protect Against Crop Failure"
            className="w-full h-[10rem] object-contain rounded-md"
          />
          <span className="block mt-4 text-lg font-semibold text-gray-800">
            Protect Against Crop Failure
          </span>
          <p className="text-gray-600">
            Diversify your portfolio with an asset class resilient to market fluctuations.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300">
          <img
            src={heroBene1}  // Replace with actual image URL
            alt="Earn Sustainable Returns"
            className="w-full h-[10rem] object-contain rounded-md"
          />
          <span className="block mt-4 text-lg font-semibold text-gray-800">
            Earn Sustainable Returns
          </span>
          <p className="text-gray-600">
            Earn returns while making a positive impact on the environment.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
