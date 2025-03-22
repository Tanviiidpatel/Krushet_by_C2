import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-[10%] flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <button type="button" className="text-2xl font-bold text-black">
        Krushet
      </button>

      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Consumer
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Browse
          </a>
        </li>
        <li>
          <a href="/investor/investmentAi" className="text-gray-700 hover:text-blue-600">
            AI Investment Advisor
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Invest
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Donate
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Profile
          </a>
        </li>
      </ul>

      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
        <img
          src="https://via.placeholder.com/40" // Replace with actual profile picture
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
