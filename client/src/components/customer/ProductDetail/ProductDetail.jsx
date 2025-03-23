import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { GET_ALL_LISTING, GET_MORE_FROM_FARMER, HOST } from "../../../utils/constants";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(GET_ALL_LISTING);
        console.log("Fetched Products in ProductDetail:", res.data);

        const foundProduct = res.data.find((p) => String(p.productId) === String(id));
        console.log("Matched Product:", foundProduct);

        setProduct(foundProduct || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    const fetchSellerProducts = async () => {
      if (!product) return;

      try {
        const res = await axios.get(`${GET_MORE_FROM_FARMER}/${product.farmerId}/${product.productId}`);
        console.log(`${GET_MORE_FROM_FARMER}/${product.farmerId}/${product.productId}`);
        setSellerProducts(res.data);
      } catch (error) {
        console.error("Error fetching more products from seller:", error);
      }
    };

    fetchSellerProducts();
  }, [product]);

  if (loading) return <h1 className="text-center text-2xl">Loading...</h1>;
  if (!product) return <h1 className="text-center text-2xl">Product Not Found</h1>;

  // ✅ Increase Quantity
  const increaseQuantity = () => {
    if (quantity < product.productquantity) {
      setQuantity(quantity + 1);
    }
  };

  // ✅ Decrease Quantity (Min 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // ✅ Handle Add to Cart
  const handleAddToCart = () => {
    alert(`${quantity}kg of ${product.productname} added to cart!`);
  };

  // ✅ Handle Buy Now
  const handleBuyNow = () => {
    navigate("/checkout", { state: { product, quantity } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-gray-100 to-gray-200 flex justify-center items-center p-10">
      <div className="p-10 bg-white shadow-xl rounded-lg w-full max-w-6xl flex flex-col">
        {/* 🖼️ Product Details Section */}
        <div className="flex flex-col md:flex-row gap-10 p-8">
        <FaArrowLeft onClick={() => navigate(-1)} className="text-2xl cursor-pointer"/>
          {/* 📸 Large Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={`${HOST}${product.imageUrl}`}
              alt={product.productname}
              className="w-full h-[450px] object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* 📦 Product Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-4xl font-bold text-gray-900">{product.productname}</h1>
            <p className="text-gray-500 text-sm mt-2">Category: {product.producttype}</p>
            <p className="text-lg text-gray-700 mt-2 leading-relaxed">
              Fresh and organic {product.productname} directly from farmers.
            </p>

            {/* ⭐ Ratings */}
            <div className="flex items-center mt-3">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="ml-2 text-gray-700">{product.ratings.length || "No"} Ratings</span>
            </div>

            {/* 💰 Price & Stock */}
            <p className="text-black font-bold text-3xl mt-4">₹{product.productprize}</p>
            <p className="text-gray-500 mt-1">Available: {product.productquantity} kg</p>

            {/* 🔢 Quantity Selector */}
            <div className="mt-4 flex items-center gap-6">
              <button onClick={decreaseQuantity} className="px-5 py-2 bg-gray-200 text-lg rounded-lg hover:bg-gray-300">
                -
              </button>
              <span className="text-xl font-semibold">{quantity} kg</span>
              <button onClick={increaseQuantity} className="px-5 py-2 bg-gray-200 text-lg rounded-lg hover:bg-gray-300">
                +
              </button>
            </div>

            {/* 🛒 Buttons */}
            <div className="mt-6 flex flex-col gap-4">
              <button
                onClick={handleAddToCart}
                className="px-6 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all text-lg"
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all text-lg"
              >
                ⚡ Buy Now
              </button>
            </div>

            {/* 🚜 Seller Info */}
            <p className="text-gray-500 mt-6 text-sm">
              Sold by: <span className="font-semibold">{product.farmerId}</span>
            </p>
          </div>
        </div>

        {/* 🌟 More Products from Seller */}
        <div className="mt-10 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">More from this seller:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sellerProducts.length > 0 ? (
              sellerProducts.map((item) => (
                <div
                  key={item.productId}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/consumer/product/${item.productId}`)}
                >
                  <img
                    src={`${HOST}${item.imageUrl}`}
                    alt={item.productname}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.productname}</h3>
                  <p className="text-gray-600">₹{item.productprize}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No other products from this seller.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
