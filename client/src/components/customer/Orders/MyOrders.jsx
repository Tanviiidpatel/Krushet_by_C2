import React from "react";

// Sample orders data (Replace this with real backend data)
const orders = [
  {
    id: 1,
    product: "Apple",
    quantity: 2,
    total: 240,
    status: "Delivered",
    date: "March 10, 2025",
  },
  {
    id: 2,
    product: "Carrot",
    quantity: 1,
    total: 80,
    status: "Shipped",
    date: "March 12, 2025",
  },
  {
    id: 3,
    product: "Mango",
    quantity: 5,
    total: 750,
    status: "Pending",
    date: "March 14, 2025",
  },
];

const MyOrders = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-6">My Orders</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Total Price</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="py-2 px-4">{order.product}</td>
                <td className="py-2 px-4">{order.quantity} kg</td>
                <td className="py-2 px-4">₹{order.total}</td>
                <td className={`py-2 px-4 font-semibold ${
                  order.status === "Delivered" ? "text-green-600" :
                  order.status === "Shipped" ? "text-blue-600" : 
                  "text-red-600"
                }`}>
                  {order.status}
                </td>
                <td className="py-2 px-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
