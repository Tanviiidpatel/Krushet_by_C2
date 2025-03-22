// src/components/Header.jsx
import React from "react";
import { FaUserCircle, FaBell, FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">Hello, Krishna! Your Farm Overview</h1>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-gray-800">
          <FaBell className="h-6 w-6" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaGlobe className="h-6 w-6" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaUserCircle className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;