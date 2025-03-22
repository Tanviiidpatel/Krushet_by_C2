// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSeedling, FaShoppingCart, FaHandHoldingUsd, FaChartLine, FaCog, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-800 text-white h-screen p-5 hidden md:block">
      <h2 className="text-xl font-bold mb-6">Farmer Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-3 p-2 rounded hover:bg-green-700">
              <FaHome className="h-6 w-6" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/my-crops" className="flex items-center space-x-3 p-2 rounded hover:bg-green-700">
              <FaSeedling className="h-6 w-6" />
              <span>My Crops</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center space-x-3 p-2 rounded hover:bg-green-700">
              <FaShoppingCart className="h-6 w-6" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/crowdfunding" className="flex items-center space-x-3 p-2 rounded hover:bg-green-700">
              <FaHandHoldingUsd className="h-6 w-6" />
              <span>Crowdfunding</span>
            </Link>
          </li>
          <li>
            <Link to="/market-insights" className="flex items-center space-x-3 p-2 rounded hover:bg-green-700">
              <FaChartLine className="h-6 w-6" />
              <span>Market Insights</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-3 p-2 rounded hover:bg-green-700">
              <FaCog className="h-6 w-6" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/help" className="flex items-center space-x-3 p-2 rounded hover:bg-green-700">
              <FaQuestionCircle className="h-6 w-6" />
              <span>Help</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;