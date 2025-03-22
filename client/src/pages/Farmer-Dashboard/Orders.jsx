import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch Orders from JSON Database
  useEffect(() => {
    axios
      .get("/orders.json") // Load from public/orders.json
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  // Update Order Status
  const updateOrderStatus = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "Pending" ? "Confirmed" : "Delivered" }
          : order
      )
    );
  };

  // Cancel Order
  const cancelOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customer Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold text-green-700">{order.cropName}</h3>
              <p className="text-gray-600">Quantity: {order.quantity}kg</p>
              <p className="text-gray-600">Price: ₹{order.price}/kg</p>
              
              {/* Buyer Details */}
              <div className="mt-3 border-t pt-3">
                <h4 className="text-md font-semibold">Buyer Details</h4>
                <p className="text-gray-700"><strong>Name:</strong> {order.buyer.name}</p>
                <p className="text-gray-700"><strong>Address:</strong> {order.buyer.address}</p>
                <p className="text-gray-700"><strong>Email:</strong> {order.buyer.email}</p>
                <p className="text-gray-700"><strong>Phone:</strong> {order.buyer.phone}</p>
              </div>

              <p
                className={`mt-2 text-sm font-semibold ${
                  order.status === "Pending" ? "text-orange-500" : "text-green-500"
                }`}
              >
                Status: {order.status}
              </p>
              
              {/* Action Buttons */}
              <div className="flex justify-between mt-3">
                <button
                  onClick={() => updateOrderStatus(order.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  {order.status === "Pending" ? "Confirm" : "Deliver"}
                </button>
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
