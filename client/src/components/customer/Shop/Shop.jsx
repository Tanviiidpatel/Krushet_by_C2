import React from "react";
import { Link } from "react-router-dom";
import { apple, carrot, tomatoes, cucumber, redBellPepper } from "../../../assets/images";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🛒 Hero Section */}
      <div className="relative w-full h-64 flex items-center justify-center bg-cover bg-center bg-gray-300 mt-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4">
          <h1 className="text-4xl font-bold">Shop Fresh & Organic</h1>
          <form className="mt-4 flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-3 rounded-l-lg border border-gray-400 focus:outline-none"
            />
            <button type="submit" className="bg-gray-900 px-6 py-3 rounded-r-lg text-white font-medium">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* 🌿 Category Filters */}
      <div className="flex justify-center space-x-4 my-8">
        {["All", "Fruits", "Vegetables", "Organic", "Leafy Greens"].map((category, index) => (
          <button key={index} className="px-4 py-2 bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg font-medium">
            {category}
          </button>
        ))}
      </div>

      {/* 🏬 Product Grid */}
      <section className="py-8 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Best Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[
            { id: 1, name: "Apple", price: "₹120/kg", image: apple },
            { id: 2, name: "Carrot", price: "₹80/kg", image: carrot },
            { id: 3, name: "Tomato", price: "₹40/kg", image: tomatoes },
            { id: 4, name: "Cucumber", price: "₹60/kg", image: cucumber },
            { id: 5, name: "Bell Pepper", price: "₹100/kg", image: redBellPepper },
          ].map((product) => (
            <Link to={`/consumer/product/${product.id}`} key={product.id} className="group">
              <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center group">
                <img src={product.image} alt={product.name} className="w-28 h-28 object-cover transition-transform group-hover:scale-110" />
                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                <p className="text-green-600 font-semibold">{product.price}</p>
                <button className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔗 View More Button */}
      <div className="text-center my-8">
         <Link to="/consumer/all-products">
         <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold">
           View More Products
         </button>
         </Link>
      </div>
    </div>
  );
};

export default Shop;
