import React from "react";

const Dashboard = () => {
  // Dummy investment data with dates
  const investments = [
    { id: 1, farmer: "John Doe", amount: 500, status: "Completed", date: "2024-03-10" },
    { id: 2, farmer: "Maria Lopez", amount: 1000, status: "In Progress", date: "2024-03-15" },
    { id: 3, farmer: "Raj Patel", amount: 750, status: "Completed", date: "2024-03-18" },
    { id: 4, farmer: "Amina Yusuf", amount: 1200, status: "Pending", date: "2024-03-20" },
  ];

  // Calculate total investment, profit, and estimated return
  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const profit = totalInvested * 0.15; // Assume 15% profit
  const estimatedReturn = totalInvested + profit;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Investment Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Invested</h3>
          <p className="text-2xl font-bold text-blue-600">${totalInvested.toFixed(2)}</p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold">Profit</h3>
          <p className="text-2xl font-bold text-green-600">${profit.toFixed(2)}</p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold">Estimated Return</h3>
          <p className="text-2xl font-bold text-purple-600">${estimatedReturn.toFixed(2)}</p>
        </div>
      </div>

      {/* Investment History */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Investment History</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-2xl" >
            <thead>
              <tr className="bg-gray-100 text-center ">
                <th className="py-2 px-4 border-b ">Date</th>
                <th className="py-2 px-4 border-b ">Farmer</th>
                <th className="py-2 px-4 border-b ">Amount ($)</th>
                <th className="py-2 px-4 border-b ">Status</th>
                <th className="py-2 px-4 border-b ">Action</th>
              </tr>
            </thead>
            <tbody>
              {investments.map((investment) => (
                <tr key={investment.id} className="border hover:bg-gray-50 text-center">
                  <td className="py-2 px-4 border-b">{investment.date}</td>
                  <td className="py-2 px-4 border-b">{investment.farmer}</td>
                  <td className="py-2 px-4 border-b">${investment.amount}</td>
                  <td
                    className={`py-2 px-4 border-b font-semibold ${
                      investment.status === "Completed"
                        ? "text-green-600"
                        : investment.status === "Pending"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {investment.status}
                  </td>
                  <td><button>view</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
