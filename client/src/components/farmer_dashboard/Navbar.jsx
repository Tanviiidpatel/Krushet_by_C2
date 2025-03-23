import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative">
      {/* Navbar for Larger Screens */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Krushet Logo */}
        <div className="text-white text-2xl font-bold">Krushet</div>

        {/* Menu Items for Larger Screens */}
        <div className="flex space-x-4 hidden md:flex">
          <a href="/farmer-dashboard" className="text-white px-4 py-2">Home</a>
          <a href="/farmer-dashboard/crops" className="text-white px-4 py-2">Crops</a>
          <a href="/farmer-dashboard/orders" className="text-white px-4 py-2">Orders</a>
          <a href="/farmer-dashboard/inventory" className="text-white px-4 py-2">Inventory</a>
          <a href="/farmer-dashboard/earnings" className="text-white px-4 py-2">Earnings</a>
        </div>

        {/* Menu Button for Mobile (Positioned on the right) */}
        <button 
          onClick={toggleMenu} 
          className="text-white md:hidden p-4 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* Left Sidebar Menu for Mobile */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col justify-center items-center text-white mt-20">
          <a href="#" className="px-4 py-2 text-xl" onClick={toggleMenu}>Home</a>
          <a href="#" className="px-4 py-2 text-xl" onClick={toggleMenu}>Crops</a>
          <a href="#" className="px-4 py-2 text-xl" onClick={toggleMenu}>Orders</a>
          <a href="#" className="px-4 py-2 text-xl" onClick={toggleMenu}>Inventory</a>
          <a href="#" className="px-4 py-2 text-xl" onClick={toggleMenu}>Earnings</a>
        </div>
      </div>

      {/* Mobile Navbar Menu (Visible for smaller screens) */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-white px-4 py-2">Home</a>
          <a href="#" className="text-white px-4 py-2">Crops</a>
          <a href="#" className="text-white px-4 py-2">Orders</a>
          <a href="#" className="text-white px-4 py-2">Inventory</a>
          <a href="#" className="text-white px-4 py-2">Earnings</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
