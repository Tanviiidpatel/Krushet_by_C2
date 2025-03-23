import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";  

const CustomerLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />  {/* ✅ Navbar is always visible */}
      <div className="pt-20">
        <Outlet />  {/* ✅ This will load CustomerDashboard, Shop, PreOrder, or InSeasonNow dynamically */}
      </div>
    </div>
  );
};

export default CustomerLayout;
