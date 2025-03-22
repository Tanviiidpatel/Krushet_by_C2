import React, { useEffect, useState } from "react";
import axios from "axios";

const MarketTrends = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketTrends = async () => {
      try {
        const response = await axios.get("/data/marketTrends.json");
        if (response.data.success) {
          setMarketData(response.data.trends);
        } else {
          setError("Failed to load market trends.");
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarketTrends();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Current Market Trends</h2>
      {loading && <p>Loading market data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketData.map((crop, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold">{crop.name}</h3>
              <p className="text-gray-600">Price: {crop.price}</p>
              <p className={`mt-2 font-semibold ${crop.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {crop.trend === "up" ? "📈 Increasing" : "📉 Decreasing"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketTrends;
