import React, { useState } from "react";

// Temporary data (Replace with actual data from API)
const earningsData = 1500; // Total earnings
const salesData = 200; // Total sales
const transactionHistory = [
  {
    id: 1,
    date: "2025-03-01",
    amount: 50,
    type: "Sale",
    status: "Completed",
  },
  {
    id: 2,
    date: "2025-03-05",
    amount: 100,
    type: "Sale",
    status: "Completed",
  },
  {
    id: 3,
    date: "2025-03-08",
    amount: 200,
    type: "Refund",
    status: "Completed",
  },
  {
    id: 4,
    date: "2025-03-10",
    amount: 150,
    type: "Sale",
    status: "Pending",
  },
];

const EarningsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-black-500 mb-8">
          Earnings & Sales Dashboard
        </h1>

        {/* Earnings and Sales Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {/* Total Earnings Card */}
          <div className="bg-white p-6 rounded-lg shadow-md h-50 flex flex-col items-center justify-center">
  <h2 className="text-3xl font-semibold text-gray-800">Total Earnings</h2>
  <p className="text-4xl text-green-600 font-bold mt-4">${earningsData}</p>
</div>


          {/* Total Sales Card */}
          <div className="bg-white p-6 rounded-lg shadow-md h-50 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold text-gray-800">Total Sales</h2>
            <p className="text-4xl text-green-600 font-bold mt-4">${salesData} Sales</p>
          </div>
        </div>

        {/* Transaction History Table */}
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transaction History</h2>
          <table className="min-w-full bg-white table-auto">
  <thead>
    <tr>
      <th className="py-3 px-6 text-left text-gray-700 text-xl">Date</th>
      <th className="py-3 px-6 text-left text-gray-700 text-xl">Type</th>
      <th className="py-3 px-6 text-left text-gray-700 text-xl">Amount</th>
      <th className="py-3 px-6 text-left text-gray-700 text-xl">Status</th>
    </tr>
  </thead>
  <tbody>
    {transactionHistory.map((transaction) => (
      <tr key={transaction.id} className="border-t">
        <td className="py-3 px-6 text-gray-600 text-lg">{transaction.date}</td>
        <td className="py-3 px-6 text-gray-600 text-lg">{transaction.type}</td>
        <td className="py-3 px-6 text-gray-600 text-lg">${transaction.amount}</td>
        <td
          className={`py-3 px-6 text-lg text-sm ${
            transaction.status === "Completed"
              ? "text-green-500"
              : "text-yellow-500"
          }`}
        >
          {transaction.status}
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
  );
};

export default EarningsPage;
