import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET_ALL_LISTING, HOST } from "../../../utils/constants";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(GET_ALL_LISTING);
        console.log(res.data);
        setProducts(res.data.slice(0, 5)); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 bg-gradient-to-b from-blue-100 via-gray-100 to-gray-200">
      {/* 🛒 Hero Section */}
      <div className="relative w-full h-64 flex items-center justify-center bg-cover bg-center bg-gray-300 ">
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
          {products.map((product, idx) => (
            <Link to={`/consumer/product/${product.productId}`} key={product.productId}>
              <div key={idx} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center group" >
                <img
                  src={`${HOST}${product.imageUrl}`}
                  alt={product.productname}
                  className="w-28 h-28 object-cover transition-transform group-hover:scale-110"
                />
                <h3 className="mt-2 text-lg font-semibold">{product.productname}</h3>
                <p className="text-green-600 font-semibold">₹{product.productprize}</p>
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
