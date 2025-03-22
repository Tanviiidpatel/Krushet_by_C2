import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return <h1 className="text-center text-2xl">No Product Selected</h1>;
  }

  const handlePayment = () => {
    alert(`Order placed for ${product.name}!`);
    navigate("/orders"); // Redirect to orders page after checkout
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-lg text-gray-700">Product: {product.name}</p>
        <p className="text-green-600 font-semibold text-xl">Price: ₹{product.price} per kg</p>

        <button
          onClick={handlePayment}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
