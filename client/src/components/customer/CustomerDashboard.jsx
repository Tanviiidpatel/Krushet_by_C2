import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import NewArrivals from "./NewArirvals/NewArrivals";  // ✅ Ensure correct name
import FeaturesGrid from "./FeaturesGrid/FeaturesGrid";  

const CustomerDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <NewArrivals />
      <FeaturesGrid />
    </div>
  );
};

export default CustomerDashboard;
