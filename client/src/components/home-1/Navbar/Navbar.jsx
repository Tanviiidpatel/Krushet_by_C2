import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold">
          <Link to="/">Krushet</Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8 items-center text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>

          {/* Dropdown for Dashboards
          <div 
            className="relative" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="hover:text-yellow-400 transition cursor-pointer">Dashboards ▼</span>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-white text-gray-800 shadow-lg rounded-lg z-50"
                   onMouseEnter={() => setDropdownOpen(true)}
                   onMouseLeave={() => setDropdownOpen(false)}>
                <Link to="/farmer-dashboard" className="block px-4 py-3 hover:bg-gray-200 transition">Farmer Dashboard</Link>
                <Link to="/consumer-dashboard" className="block px-4 py-3 hover:bg-gray-200 transition">Consumer Dashboard</Link>
                <Link to="/investor-dashboard" className="block px-4 py-3 hover:bg-gray-200 transition">Investor Dashboard</Link>
              </div>
            )}
          </div> */}

          <Link to="/features" className="hover:text-yellow-400 transition">Features</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link>

          {/* Login Button */}
          <Link to="/consumer/signup" className="bg-white px-6 py-2 rounded-lg text-black font-bold hover:bg-gray-300 transition">
            Signup
          </Link>
          <Link to="/consumer/login" className="bg-yellow-500 px-6 py-2 rounded-lg text-black font-bold hover:bg-yellow-600 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white shadow-lg flex flex-col items-center py-6 space-y-4 text-lg font-semibold">
          <Link to="/" className="py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/farmer-dashboard" className="py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Farmer Dashboard</Link>
          <Link to="/consumer-dashboard" className="py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Consumer Dashboard</Link>
          <Link to="/investor-dashboard" className="py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Investor Dashboard</Link>
          <Link to="/features" className="py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/contact" className="py-2 hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/login" className="bg-yellow-500 px-6 py-3 rounded-lg text-black font-bold hover:bg-yellow-600 transition" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}
