import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../../data/productsData";

const Preorder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 🌟 Hero Section */}
      <div className="relative w-full h-80 flex items-center justify-center bg-green-500 text-white text-center px-4 mt-10">
        <div>
          <h1 className="text-5xl font-bold">Preorder Fresh & Exclusive!</h1>
          <p className="mt-2 text-lg text-gray-100">Be the first to enjoy upcoming seasonal produce.</p>
          <button className="mt-4 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            View Preorders
          </button>
        </div>
      </div>

      {/* 📢 Why Preorder Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Why Preorder?</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Secure your favorite seasonal produce before they sell out! Enjoy the freshest organic items, delivered directly from farms.
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <div className="p-6 bg-white shadow-lg rounded-lg w-64">
            <h3 className="text-xl font-semibold text-green-600">🌱 Farm Fresh</h3>
            <p className="text-gray-600 mt-2">Preorder ensures you get the freshest produce directly from local farms.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg w-64">
            <h3 className="text-xl font-semibold text-green-600">🚀 Guaranteed Delivery</h3>
            <p className="text-gray-600 mt-2">Reserve your order now and get it delivered at the best time.</p>
          </div>
        </div>
      </section>

      {/* 🌿 Upcoming Products Grid */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Upcoming Seasonal Produce</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {productsData.map(({ id, name, price, image }) => (
            <Link to={`/customer-dashboard/product/${id}`} key={id}>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center cursor-pointer">
                <img src={image} alt={name} className="w-28 h-28 object-cover transition-transform hover:scale-110" />
                <h3 className="mt-2 text-xl font-semibold">{name}</h3>
                <p className="text-green-600 font-semibold">₹{price}</p>
                <button className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium">
                  Preorder Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Preorder;
