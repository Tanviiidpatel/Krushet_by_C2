import React from "react";
import MarketTrends from "../components/MarketTrends";
import MarketChart from "../components/MarketChart";
import MarketAnalysis from "../components/MarketAnalysis";

const MarketInsights = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6 border-b-2 border-green-500 pb-2">
        Market Insights
      </h1>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <MarketTrends />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <MarketChart />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <MarketAnalysis />
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
