import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  GET_ALL_LISTING,
  HOST,
  CROP_TYPES,
  PRICE_RANGES,
  QUANTITIES_TYPES,
} from "../../../utils/constants";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(GET_ALL_LISTING);
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, []);

  // 🔍 Filtering logic
  useEffect(() => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.productname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.producttype === selectedCategory
      );
    }

    if (selectedQuantity) {
      filtered = filtered.filter(
        (product) => product.productquantity >= selectedQuantity
      );
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange;
      filtered = filtered.filter(
        (product) => product.productprize >= min && product.productprize <= max
      );
    }

    setFilteredProducts(filtered);
  }, [
    searchTerm,
    selectedCategory,
    selectedQuantity,
    selectedPriceRange,
    products,
  ]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = cart.some(
      (item) => item.productId === product.productId
    );

    if (!isAlreadyInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartMessage(`${product.productname} added to cart!`);
      setTimeout(() => setCartMessage(""), 2000);
    } else {
      setCartMessage(`${product.productname} is already in the cart!`);
      setTimeout(() => setCartMessage(""), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-gray-100 to-gray-200 pb-12">
      {/* 🛒 Search Bar */}
      <div className="relative w-full h-64 flex items-center justify-center bg-cover bg-center bg-green-100">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4">
          <h1 className="text-4xl font-bold">Browse All Products</h1>
          <p className="text-gray-700 mt-2">
            Find the best quality farm produce at great prices!
          </p>
          <form
            className="mt-4 flex w-full max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-3 rounded-l-lg border border-gray-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-600 px-6 py-3 rounded-r-lg text-white font-medium"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* 🏷 Filters & Product Grid Layout */}
      <div className="flex gap-6 mt-8 px-6">
        {/* 🔍 Sidebar Filters */}
        <div className="w-1/4 h-[50vh] p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* 🌱 Crop Type */}
          <div className="mb-4 ">
            <h4 className="font-medium mb-2">Crop Type:</h4>
            <div className="flex flex-wrap gap-1">
              <button
                className={`block w-auto text-left px-4 py-2 mb-1 border rounded-md ${
                  selectedCategory === null
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              {CROP_TYPES.map((type) => (
                <button
                  key={type}
                  className={`block w-auto text-left px-4 py-2 mb-1 border rounded-md ${
                    selectedCategory === type
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* ⚖️ Quantity */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Minimum Quantity (kg)</h4>
            <div className="flex flex-wrap gap-1">
              {QUANTITIES_TYPES.map((qty) => (
                <button
                  key={qty}
                  className={`block w-auto text-left px-4 py-2 mb-1 border rounded-md ${
                    selectedQuantity === qty
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedQuantity(qty)}
                >
                  {qty}+
                </button>
              ))}
            </div>
          </div>

          {/* 💰 Price Range */}
          <div>
            <h4 className="font-medium mb-2">Price Range (₹)</h4>
            <div className="flex flex-wrap gap-1">
              {PRICE_RANGES.map(([min, max]) => (
                <button
                  key={min}
                  className={`block w-auto text-left px-4 py-2 mb-1 border rounded-md ${
                    selectedPriceRange?.[0] === min
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedPriceRange([min, max])}
                >
                  ₹{min} - ₹{max}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 🏬 Product Grid */}
        <div className="w-3/4">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Available Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 px-8 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  to={`/consumer/product/${product.productId}`}
                  key={product.productId}
                >
                  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center group cursor-pointer hover:shadow-xl transition-transform hover:scale-105">
                    <img
                      src={`${HOST}${product.imageUrl}`}
                      alt={product.productname}
                      className="w-28 h-28 object-cover rounded-md transition-transform group-hover:scale-110"
                    />
                    <h3 className="mt-2 text-lg font-semibold text-gray-800">
                      {product.productname}
                    </h3>
                    <p className="text-green-600 font-semibold">
                      ₹{product.productprize}
                    </p>
                    <p className="text-gray-600">
                      Quantity: {product.productquantity} kg
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
