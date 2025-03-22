import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../../data/productsData";  

const AllProducts = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {productsData.map((product) => (
          <Link to={`/customer-dashboard/product/${product.id}`} key={product.id}>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center cursor-pointer transition-transform hover:scale-105">
              <img src={product.image} alt={product.name} className="w-28 h-28 object-cover rounded-md" />
              <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
              <p className="text-green-600 font-semibold text-xl">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
