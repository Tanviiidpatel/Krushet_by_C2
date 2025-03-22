import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsData } from "../../../data/productsData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h1 className="text-center text-2xl">Product Not Found</h1>;

  // ✅ Increase Quantity
  const increaseQuantity = () => {
    if (quantity < product.stock) {
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
    alert(`${quantity}kg of ${product.name} added to cart!`);
  };

  // ✅ Handle Buy Now
  const handleBuyNow = () => {
    navigate("/checkout", { state: { product, quantity } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl flex">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="w-1/3 object-cover rounded-lg" />

        {/* Product Details */}
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-600 font-semibold text-xl mt-4">₹{product.price} per kg</p>
          <p className="text-gray-500 mt-1">Stock: {product.stock} kg</p>

          {/* ✅ Quantity Selector */}
          <div className="mt-4 flex items-center gap-4">
            <button onClick={decreaseQuantity} className="px-4 py-2 bg-gray-200 rounded-lg">-</button>
            <span className="text-lg">{quantity} kg</span>
            <button onClick={increaseQuantity} className="px-4 py-2 bg-gray-200 rounded-lg">+</button>
          </div>

          {/* ✅ Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
          >
            Add to Cart
          </button>

          {/* ✅ Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="mt-4 ml-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
