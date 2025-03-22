import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-60 text-white py-4 px-6 flex justify-between items-center z-10">
      
      {/* Logo */}
      <div className="text-2xl font-bold">Krushet</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li><Link to="/" className="text-lg hover:text-yellow-400 transition">Home</Link></li>
        <li><Link to="/features" className="text-lg hover:text-yellow-400 transition">Features</Link></li>
        <li><Link to="/contact-us" className="text-lg hover:text-yellow-400 transition">Contact Us</Link></li>
      </ul>

      {/* Auth Links */}
      <div className="flex gap-3">
        <Link to="/login" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
          Login
        </Link>
        <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;