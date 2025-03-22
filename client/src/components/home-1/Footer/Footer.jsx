import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
    className="text-white py-12 font-sans"
    style={{ backgroundColor: "oklch(0.39 0.1 152.54 / 0.84)" }}
  >
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:flex md:justify-between items-start border-b border-gray-700 pb-6">
          
          {/* Brand Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-2xl font-extrabold text-white">
              Krushet – Connecting Farmers & Buyers
            </p>
            <p className="text-gray-300 text-sm mt-2 max-w-sm">
              Empowering farmers by connecting them directly with buyers for fair and transparent trade.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Farmers</h4>
              <ul className="space-y-2">
                <li className="hover:text-yellow-400 cursor-pointer">Sell Crops Easily</li>
                <li className="hover:text-yellow-400 cursor-pointer">How It Works</li>
                <li className="hover:text-yellow-400 cursor-pointer">Farmer Dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Buyers</h4>
              <ul className="space-y-2">
                <li className="hover:text-yellow-400 cursor-pointer">Find Fresh Produce</li>
                <li className="hover:text-yellow-400 cursor-pointer">Why Choose Us?</li>
                <li className="hover:text-yellow-400 cursor-pointer">Order Process</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Support</h4>
              <ul className="space-y-2">
                <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
                <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <FaFacebook className="text-2xl text-white hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer" />
            <FaLinkedin className="text-2xl text-white hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer" />
            <FaYoutube className="text-2xl text-white hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer" />
            <FaInstagram className="text-2xl text-white hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Krushet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
