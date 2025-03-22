import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apple, carrot, mango } from "../../../assets/images";

// Sample Cart Data (Replace with Context or Redux in future)
const initialCart = [
  { id: 1, name: "Apple", price: 120, quantity: 2, image: apple },
  { id: 2, name: "Carrot", price: 80, quantity: 1, image: carrot },
  { id: 3, name: "Mango", price: 150, quantity: 3, image: mango },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  // Update Quantity
  const updateQuantity = (id, change) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/customer-dashboard/shop">
            <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
                <span className="px-4">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
              </div>
              <p className="text-lg font-medium">₹{item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-2xl font-semibold">Total: ₹{totalPrice}</h2>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
