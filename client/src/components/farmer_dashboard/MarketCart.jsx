import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const MarketChart = () => {
  // Temporary market data array for chart visualization
  const temporaryMarketData = [
    { name: "Wheat", price: "₹25/kg" },
    { name: "Rice", price: "₹30/kg" },
    { name: "Corn", price: "₹18/kg" },
    { name: "Barley", price: "₹22/kg" },
    { name: "Soybean", price: "₹40/kg" },
  ];

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simulate data fetch and transformation
    const formattedData = temporaryMarketData.map((crop) => ({
      name: crop.name,
      price: parseInt(crop.price.replace("₹", "").replace("/kg", "")), // Remove currency and unit
    }));
    setChartData(formattedData); // Set formatted data to state
  }, []);

  return (
    <div className="bg-yellow-100 p-6 shadow-lg rounded-lg h-7px">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Market Price Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketChart;
