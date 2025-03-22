import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DemoFarmerInvestment = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    farmerId: "67de6fcc7bd26fc02b802246", 
    amount: "",
    purpose: "",
    description: "",
    returnCash: false,
    returnCrop: false,
    cropKilos: "",
    returnPercentage: "",
    belowMarketPrice: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2203/api/invest/ask-investment", formData);
      navigate("/investor/investment");
      setFormData({
        farmerId: "67de6fcc7bd26fc02b802246", 
        amount: "",
        purpose: "",
        description: "",
        returnCash: false,
        returnCrop: false,
        cropKilos: "",
        returnPercentage: "",
        belowMarketPrice: "",
      });
      alert("Investment request submitted!");
    } catch (error) {
      console.error("Error submitting investment request", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Request Investment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <div className="flex items-center space-x-3">
          <label className="flex items-center">
            <input type="checkbox" name="returnCash" onChange={handleChange} className="mr-2" /> Return in Cash
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="returnCrop" onChange={handleChange} className="mr-2" /> Return in Crops
          </label>
        </div>

        {formData.returnCrop && (
          <input
            type="number"
            name="cropKilos"
            placeholder="Kilos of Crop"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        )}
        {formData.returnCash && (
          <input
            type="number"
            name="returnPercentage"
            placeholder="Return % in Cash"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        )}
        {formData.returnCrop && (
          <input
            type="number"
            name="belowMarketPrice"
            placeholder="Discount on Crops (%)"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default DemoFarmerInvestment;
