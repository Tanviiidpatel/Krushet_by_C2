import React, { useEffect, useState } from "react";
import axios from "axios";
import { CROP_TYPES, GET_ALL_LISTING, HOST, PRICE_RANGES, QUANTITIES_TYPES } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../store/index.js"; 

const Demo = () => {
  const [searchedProduct, setSearchedProduct] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const navigate = useNavigate();
  const { setSelectedProduct } = useAppStore();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(GET_ALL_LISTING);
        setAllProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    let filtered = allProducts;

    if (searchedProduct) {
      filtered = filtered.filter((product) =>
        product.productname.toLowerCase().includes(searchedProduct.toLowerCase())
      );
    }
    
    if (selectedType) {
      filtered = filtered.filter((product) => product.producttype === selectedType);
    }

    if (selectedQuantity) {
      filtered = filtered.filter((product) => product.productquantity >= selectedQuantity);
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange;
      filtered = filtered.filter((product) => product.productprize >= min && product.productprize <= max);
    }

    setFilteredProducts(filtered);
  }, [searchedProduct, selectedType, selectedQuantity, selectedPriceRange, allProducts]);


  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="flex max-w-6xl mx-auto p-4">
      <div className="w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>

        <div>
          <h3 className="font-semibold mb-1">Type</h3>
          <button
            className={`block w-full p-2 mb-1 border rounded-md ${
              selectedType === null ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedType(null)}
          >
            All
          </button>
          {CROP_TYPES.map((type) => (
            <button
              key={type}
              className={`block w-full p-2 mb-1 border rounded-md ${
                selectedType === type ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-1">Minimum Quantity (kg)</h3>
          {QUANTITIES_TYPES.map((qty) => (
            <button
              key={qty}
              className={`block w-full p-2 mb-1 border rounded-md ${
                selectedQuantity === qty ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedQuantity(qty)}
            >
              {qty}+
            </button>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-1">Price Range (₹)</h3>
          {PRICE_RANGES.map(([min, max]) => (
            <button
              key={min}
              className={`block w-full p-2 mb-1 border rounded-md ${
                selectedPriceRange?.[0] === min ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedPriceRange([min, max])}
            >
              ₹{min} - ₹{max}
            </button>
          ))}
        </div>
      </div>

      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-semibold mb-4">Browse Crops</h1>

        
        <input
          type="text"
          placeholder="Search for a crop..."
          value={searchedProduct}
          onChange={(e) => setSearchedProduct(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="border rounded-md p-4 shadow-md cursor-pointer"
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
            ))
          ) : (
            <p className="text-gray-500 text-center">No crops found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
