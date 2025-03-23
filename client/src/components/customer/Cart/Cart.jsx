import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CONFIRM_PAYMENT, HOST } from "../../../utils/constants";
import { MdOutlineDelete } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Remove single item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.productId !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Remove all items
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // ✅ Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.productprize,
    0
  );

  const handleCheckout = (e) => {
    console.log("hi");
    e.preventDefault();
      const checkout = async () => {
        try{
          const res = await axios.post(CONFIRM_PAYMENT,{
            productId: "1742653540842",
            farmerId: "67de679bf13f3ca2a43669db",
            consumerId: "67df85ccacecd6ae7956fb1a",
            name: "banana"
          });
          
          console.log(res.data);
        }

        catch(err){
          console.log(err.message)
        }
        checkout();
      }
  }

  return (
    <div className="min-h-screen bg-green-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">🛍️ Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <FaArrowLeft onClick={() => navigate(-1)} className="cursor-pointer"/>
          <p className="text-gray-700 text-lg">Your cart is empty. Start shopping now!</p>
          <Link to="/consumer/shop">
            <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border border-green-200">
          <FaArrowLeft className="mb-2 cursor-pointer" onClick={() => navigate(-1)}/>
          {cart.map((item) => {
            return (
              <div
                key={item.productId}
                className="flex items-center justify-between border-b border-green-100 py-4"
              >
                <img
                  src={`${HOST}${item.imageUrl}`}
                  alt={item.productname}
                  className="w-20 h-20 object-cover rounded-lg shadow-sm border border-green-300" />
                <h3 className="text-lg font-semibold text-green-800">{item.productname}</h3>
                <p className="text-gray-600">{item.producttype}</p>
                <p className="text-lg font-medium text-green-700">₹{item.productprize}</p>
                <p className="text-gray-600">Quantity: {item.productquantity} kg</p>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-red-500 hover:text-red-700 transition text-3xl"
                >
                  <MdOutlineDelete />
                </button>
              </div>
            );
          })}

          {/* ✅ Total & Checkout Section */}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-semibold text-green-700">Total: ₹{totalPrice}</h2>
            <div className="flex gap-4 mt-4 justify-end">
              <button
                onClick={clearCart}
                className="px-5 py-3 bg-red-400 text-white font-semibold rounded-full hover:bg-red-500 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
