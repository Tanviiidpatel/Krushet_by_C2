import React, { useEffect, useState } from "react";
import axios from "axios";

const MarketAnalysis = () => {
  const [marketData, setMarketData] = useState([]);
  const [highestCrop, setHighestCrop] = useState(null);
  const [lowestCrop, setLowestCrop] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get("/data/marketTrends.json");
        if (response.data.success) {
          setMarketData(response.data.trends);

          const sortedData = [...response.data.trends].sort(
            (a, b) => parseInt(b.price.replace("₹", "").replace("/kg", "")) - parseInt(a.price.replace("₹", "").replace("/kg", ""))
          );

          setHighestCrop(sortedData[0]);
          setLowestCrop(sortedData[sortedData.length - 1]);
        }
      } catch (err) {
        console.error("Error fetching market analysis", err);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-bold mb-4">Market Analysis Report</h2>
      {highestCrop && lowestCrop && (
        <div className="text-gray-700">
          <p>
            📈 <strong>Highest Price Crop:</strong> {highestCrop.name} - {highestCrop.price}
          </p>
          <p>
            📉 <strong>Lowest Price Crop:</strong> {lowestCrop.name} - {lowestCrop.price}
          </p>
        </div>
      )}
      <ul className="mt-4 space-y-2">
        {marketData.map((crop, index) => (
          <li key={index} className="p-2 border rounded">
            {crop.name}: <span className="font-semibold">{crop.price}</span> ({crop.trend === "up" ? "⬆️ Increasing" : "⬇️ Decreasing"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketAnalysis;
