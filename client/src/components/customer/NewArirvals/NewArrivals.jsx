import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GET_ALL_LISTING, HOST } from "../../../utils/constants";

const NewArrivals = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(GET_ALL_LISTING);
        setAllProducts(res.data.slice(0,8)); // Fetch first 6 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <div className="max-w-[60vw] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">New This Week 🌾</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <Link to={`/consumer/product/${product.productId}`} key={product.productId}>
              <div
                key={product.productId}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={`${HOST}${product.imageUrl}`}
                  alt={product.productname}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{product.productname}</h2>
                <p className="text-gray-600">Type: {product.producttype}</p>
                <p className="text-gray-600">Quantity: {product.productquantity} kg</p>
                <p className="text-gray-600">Price: ₹{product.productprize}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No new products available.</p>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
