import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 font-sans">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-6 border-b border-gray-300 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <p className="text-lg font-bold text-gray-800">
              Khruset – Connecting Farmers & Buyers
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="text-lg font-bold text-green-800 mb-2">Farmers</h4>
              <ul className="space-y-1">
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">Sell Crops Easily</li>
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">How It Works</li>
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">Farmer Dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-green-800 mb-2">Buyers</h4>
              <ul className="space-y-1">
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">Find Fresh Produce</li>
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">Why Choose Us?</li>
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">Order Process</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-green-800 mb-2">Support</h4>
              <ul className="space-y-1">
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">FAQs</li>
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">Contact Us</li>
                <li className="text-gray-600 hover:text-green-800 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <FaFacebook className="text-2xl text-gray-800 hover:text-green-800 transition-transform transform hover:scale-110 cursor-pointer" />
          <FaLinkedin className="text-2xl text-gray-800 hover:text-green-800 transition-transform transform hover:scale-110 cursor-pointer" />
          <FaYoutube className="text-2xl text-gray-800 hover:text-green-800 transition-transform transform hover:scale-110 cursor-pointer" />
          <FaInstagram className="text-2xl text-gray-800 hover:text-green-800 transition-transform transform hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;