import React from "react";
import DonorList from "../components/DonorList";
import InvestorList from "../components/InvestorList";
import FarmerNeedsForm from "../components/FarmerNeedsForm";

const Crowdfunding = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6 border-b-2 border-green-500 pb-2">
        🌱 Crowdfunding for Farmers
      </h1>

      {/* Farmer Needs Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <FarmerNeedsForm />
      </div>

      {/* Display Donors & Investors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DonorList />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <InvestorList />
        </div>
      </div>
    </div>
  );
};

export default Crowdfunding;
