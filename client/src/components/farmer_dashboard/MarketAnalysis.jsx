import React, { useEffect, useState } from "react";

const MarketAnalysis = () => {
  // Temporary market data array for analysis
  const temporaryMarketData = [
    { name: "Wheat", price: "₹25/kg", trend: "up" },
    { name: "Rice", price: "₹30/kg", trend: "down" },
    { name: "Corn", price: "₹18/kg", trend: "up" },
    { name: "Barley", price: "₹22/kg", trend: "down" },
    { name: "Soybean", price: "₹40/kg", trend: "up" },
  ];

  const [marketData, setMarketData] = useState([]);
  const [highestCrop, setHighestCrop] = useState(null);
  const [lowestCrop, setLowestCrop] = useState(null);

  useEffect(() => {
    // Simulate data fetch and analysis
    setMarketData(temporaryMarketData);

    const sortedData = [...temporaryMarketData].sort(
      (a, b) => parseInt(b.price.replace("₹", "").replace("/kg", "")) - parseInt(a.price.replace("₹", "").replace("/kg", ""))
    );

    setHighestCrop(sortedData[0]);
    setLowestCrop(sortedData[sortedData.length - 1]);
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-200 to-orange-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Market Analysis Report</h2>
      {highestCrop && lowestCrop && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <p className="text-lg font-semibold text-gray-700">
            📈 <strong>Highest Price Crop:</strong> {highestCrop.name} - {highestCrop.price}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            📉 <strong>Lowest Price Crop:</strong> {lowestCrop.name} - {lowestCrop.price}
          </p>
        </div>
      )}
      <ul className="space-y-4">
        {marketData.map((crop, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
            <div className="flex justify-between">
              <div className="text-lg font-semibold text-gray-800">{crop.name}</div>
              <div className="text-sm text-gray-600">{crop.price}</div>
            </div>
            <div className={`mt-2 text-sm font-semibold ${crop.trend === "up" ? "text-green-500" : "text-red-500"}`}>
              {crop.trend === "up" ? "⬆️ Increasing" : "⬇️ Decreasing"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketAnalysis;
