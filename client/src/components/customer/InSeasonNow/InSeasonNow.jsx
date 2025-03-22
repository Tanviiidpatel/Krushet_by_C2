import React from "react";
import { Link } from "react-router-dom";
import { 
  inSeason, 

  // Fruits
  strawberries, pineapples, peaches, lychee, plum, 

  // Featured Products
  redBellPepper, greenBellPepper, yellowBellPepper, 
  okra, zucchini, eggplant 
} from "../../../assets/images";
import { productsData } from "../../../data/productsData"; 
const InSeasonNow = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🌿 Hero Section */}
      <div className="flex justify-center items-center px-10 py-10">
        <div className="mt-20 relative w-full max-w-5xl rounded-lg overflow-hidden">
          
          {/* Background Image */}
          <img
            src={inSeason}
            alt="Seasonal Products"
            className="w-full h-[400px] sm:h-[600px] md:h-[600px] object-cover rounded-lg opacity-90"
          />

          {/* Gradient Overlay for Better Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              Fresh from Farm 🌿
            </h2>
            <p className="text-lg sm:text-xl mt-3 font-bold opacity-90">
              Hand-picked seasonal produce, straight to your doorstep!
            </p>
            
          </div>
        </div>
      </div>

      {/* 🍓 Fruits in Season Section */}
      <section className="py-14 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Fruits in Season</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {productsData
            .filter((product) => 
              ["Strawberries", "Pineapples", "Peaches", "Lychee", "Plum"].includes(product.name)
            )
            .map((product) => (
              <Link to={`/customer-dashboard/product/${product.id}`} key={product.id}>
                <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg cursor-pointer">
                  <img src={product.image} alt={product.name} className="w-28 h-28 object-cover rounded-full transition-transform hover:scale-110" />
                  <p className="mt-2 text-lg font-medium text-gray-800 capitalize">{product.name}</p>
                </div>
              </Link>
          ))}
        </div>
      </section>

      {/* 🥦 Featured Products Section */}
      <section className="py-14 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {productsData
            .filter((product) => 
              ["Red Bell Pepper", "Green Bell Pepper", "Yellow Bell Pepper", "Okra", "Zucchini", "Eggplant (Brinjal)"].includes(product.name)
            )
            .map((product) => (
              <Link to={`/customer-dashboard/product/${product.id}`} key={product.id}>
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer">
                  <img src={product.image} alt={product.name} className="w-28 h-28 object-cover transition-transform hover:scale-110" />
                  <h3 className="mt-3 text-lg font-medium">{product.name}</h3>
                  <p className="text-green-600 font-semibold text-xl">₹{product.price}</p>
                </div>
              </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InSeasonNow;
