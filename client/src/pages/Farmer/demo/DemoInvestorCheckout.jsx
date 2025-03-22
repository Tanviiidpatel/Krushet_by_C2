import React, { useEffect, useState } from "react";
import axios from "axios";

const DemoInvestorCheckout = () => {
  const [investmentRequests, setInvestmentRequests] = useState([]);
  const [selectedReturns, setSelectedReturns] = useState({});

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:2203/api/invest/getAllInvesmentRequest");
        setInvestmentRequests(res.data);
      } catch (error) {
        console.error("Error fetching investment requests", error);
      }
    };
    fetchRequests();
  }, []);

  const handleInvest = async (id) => {
    const selectedReturnType = selectedReturns[id];

    if (!selectedReturnType) {
      alert("Please select a return type before investing.");
      return;
    }

    try {
      await axios.put(`http://localhost:2203/api/invest/accept/${id}`, {
        investorId: "67de681d5b08c50035c4369c",
        returnType: selectedReturnType,
      });
      alert("Investment offer accepted!");
    } catch (error) {
      console.error("Error submitting investment", error);
    }
  };

  const handleReturnSelection = (id, type) => {
    setSelectedReturns((prev) => ({ ...prev, [id]: type }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Investment Opportunities</h2>

      {investmentRequests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {investmentRequests.map((req) => (
            <div key={req._id} className="border p-4 shadow-md rounded-md bg-gray-100">
              {/* Farmer Details */}
              <div className="mb-2">
                <p className="text-sm font-medium text-gray-700">Farmer: {req.farmerName || "jojo"}</p>
                <p className="text-sm text-gray-600">Location: {req.farmerLocation || "london"}</p>
              </div>

              {/* Investment Details */}
              <h3 className="text-lg font-semibold text-gray-800">₹{req.amount} Required</h3>
              <p className="text-gray-600">Purpose: {req.purpose}</p>
              <p className="text-gray-600">Description: {req.description}</p>

              {/* Returns Selection */}
              <div className="mt-2">
                <p className="font-semibold">Returns:</p>
                {req.returnCash && (
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`return-${req._id}`}
                      value="cash"
                      checked={selectedReturns[req._id] === "cash"}
                      onChange={() => handleReturnSelection(req._id, "cash")}
                    />
                    <span>Cash Return: {req.returnPercentage}%</span>
                  </label>
                )}
                {req.returnCash && req.returnCrop && <p className="text-gray-500">or</p>}
                {req.returnCrop && (
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`return-${req._id}`}
                      value="crop"
                      checked={selectedReturns[req._id] === "crop"}
                      onChange={() => handleReturnSelection(req._id, "crop")}
                    />
                    <span>Crops at Low Price ({req.cropKilos} kg) - Discount: {req.belowMarketPrice}%</span>
                  </label>
                )}
              </div>

              <button
                onClick={() => handleInvest(req._id)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No investment requests available.</p>
      )}
    </div>
  );
};

export default DemoInvestorCheckout;
