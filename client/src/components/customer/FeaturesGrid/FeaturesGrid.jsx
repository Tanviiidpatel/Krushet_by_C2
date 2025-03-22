import React from "react";
import { brand1, brand2, brand3, brand4, brand5 } from "../../../assets/images";
import { Link } from "react-router-dom";


const brands = [brand1, brand2, brand3, brand4, brand5];

const FeaturesGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 pt-16 pb-10 mt-10">
      
      <div className="w-full max-w-5xl">
        <h2 className="text-left text-2xl font-bold mb-10 mt-10">Featured Brands</h2>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full max-w-5xl">
        {brands.map((brand, index) => (
          <div key={index} className="w-[150px] md:w-[180px] h-[180px] mx-auto">
            <img src={brand} alt={`Brand ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center px-10 pt-16 pb-10 mt-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            Get fresh produce delivered
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Join our community of small farm supporters and get healthy products for your family!
          </p>
          <Link to="/customer-dashboard/shop">
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
          Get started
        </button>
      </Link>
       </div>
    </div>
  );
};

export default FeaturesGrid;
