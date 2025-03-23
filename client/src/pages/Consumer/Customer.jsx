import React from "react";
import Navbar from "../../components/customer/Navbar/Navbar";
import HeroSection from "../../components/customer/HeroSection/HeroSection";
import NewArrivals from "../../components/customer/NewArirvals/NewArrivals";
import FeaturesGrid from "../../components/customer/FeaturesGrid/FeaturesGrid";
import PreOrder from "../../components/customer/PreOrder/PreOrder";
import Shop from "../../components/customer/Shop/Shop";
import InSeasonNow from "../../components/customer/InSeasonNow/InSeasonNow";

const Customer = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-blue-100 via-gray-100 to-gray-200 ">
        <HeroSection />
        <NewArrivals />
        <FeaturesGrid />
        <PreOrder />
        <Shop />
        <InSeasonNow />
      </div>
    </div>
  );
};

export default Customer;
