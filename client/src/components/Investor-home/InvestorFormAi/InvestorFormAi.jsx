import React, { useState } from "react";
import { INVESTMENT_AI_ROUTE } from "../../utils/constants";
import axios from "axios";

const InvestorFormAi = () => {
  const [investment, setInvestment] = useState("");
  const [risk, setRisk] = useState("medium");
  const [duration, setDuration] = useState("6");
  const [region, setRegion] = useState("");
  const [sustainability, setSustainability] = useState("no");
  const [marketFocus, setMarketFocus] = useState("stable");
  const [profit, setProfit] = useState(null);
  const [generatedData, setGeneratedData] = useState([]);


  const generateRecommendation = async () => {
    setGeneratedData([]);
    try {
      console.log(INVESTMENT_AI_ROUTE);
      const res = await axios.post(INVESTMENT_AI_ROUTE, {
        amount: Number(investment),
        risk: risk,
        investmentDuration: Number(duration),
        prefferedRegion: region,
        sustainabilityPreference: sustainability,
        marketFocus: marketFocus,
      });
      console.log(res);
      setGeneratedData(res.data.crops);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Investor Form</h2>

      {/* Investment Amount */}
      <label className="block text-gray-700 font-medium">
        Investment Amount (₹):
      </label>
      <input
        type="number"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
        placeholder="Enter amount"
        className="w-full p-2 border rounded mt-1 mb-3 focus:ring-2 focus:ring-green-400"
      />

      {/* Risk Appetite */}
      <label className="block text-gray-700 font-medium">Risk Appetite:</label>
      <select
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
        className="w-full p-2 border rounded mt-1 mb-3 focus:ring-2 focus:ring-green-400"
      >
        <option value="low">Low Risk (Stable crops)</option>
        <option value="medium">Medium Risk (Vegetables, pulses)</option>
        <option value="high">High Risk (Cash crops, exotic)</option>
      </select>

      {/* Investment Duration */}
      <label className="block text-gray-700 font-medium">
        Investment Duration (months):
      </label>
      <select
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="w-full p-2 border rounded mt-1 mb-3 focus:ring-2 focus:ring-green-400"
      >
        <option value="3">3 months</option>
        <option value="6">6 months</option>
        <option value="12">12 months</option>
      </select>

      {/* Preferred Region */}
      <label className="block text-gray-700 font-medium">
        Preferred Region (Optional):
      </label>
      <input
        type="text"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Enter region"
        className="w-full p-2 border rounded mt-1 mb-3 focus:ring-2 focus:ring-green-400"
      />

      {/* Sustainability Preference */}
      <label className="block text-gray-700 font-medium">
        Sustainability Preference:
      </label>
      <select
        value={sustainability}
        onChange={(e) => setSustainability(e.target.value)}
        className="w-full p-2 border rounded mt-1 mb-3 focus:ring-2 focus:ring-green-400"
      >
        <option value="yes">Organic Farming</option>
        <option value="no">Traditional Farming</option>
      </select>

      {/* Market Focus */}
      <label className="block text-gray-700 font-medium">Market Focus:</label>
      <select
        value={marketFocus}
        onChange={(e) => setMarketFocus(e.target.value)}
        className="w-full p-2 border rounded mt-1 mb-3 focus:ring-2 focus:ring-green-400"
      >
        <option value="stable">Stable Returns</option>
        <option value="high-demand">High Market Demand</option>
      </select>

      {/* Generate Button */}
      <button
        onClick={generateRecommendation}
        className="w-full bg-green-500 text-white p-3 mt-4 rounded hover:bg-green-600 transition cursor-pointer"
      >
        Generate Recommendation
      </button>


      {/* Profit Estimation Result */}
      {profit && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-center">
          <h3 className="text-lg font-bold">Estimated Profit:</h3>
          <p className="text-xl text-green-700 font-semibold">₹{profit}</p>
        </div>
      )}
    </div>
      {generatedData.length > 0 && (
        <div className="mx-[10rem]">
        <h2>Investment Recommendations</h2>
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Crop Name</th>
              <th>Market Demand</th>
              <th>Climate Suitability</th>
              <th>Expected Yield</th>
              <th>ROI</th>
              <th>Risk Factors</th>
              <th>Government Subsidies</th>
            </tr>
          </thead>
          <tbody>
            {generatedData.map((crop, index) => (
              <tr key={index}>
                <td>{crop.name}</td>
                <td>{crop.market_demand}</td>
                <td>{crop.climate_suitability}</td>
                <td>{crop.expected_yield}</td>
                <td>{crop.roi}</td>
                <td>{crop.risk_factors.join(", ")}</td>
                <td>{crop.government_subsidies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

      </div>
  );
};

export default InvestorFormAi;
