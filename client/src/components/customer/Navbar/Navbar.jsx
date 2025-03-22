import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-10 py-4 bg-black shadow-md h-20">
      
      {/* Logo & Search Bar */}
      <div className="pl-6 flex items-center gap-6">
        <span className="text-2xl font-bold text-white ml-16">Krushet</span>

        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-80 border border-gray-300 gap-2">
          <FiSearch className="text-gray-600 text-xl mr-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-700 w-full"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-white font-medium text-lg">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/customer-dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/customer-dashboard/shop" className="hover:underline">Shop</Link></li>
        <li><Link to="/customer-dashboard/preorder" className="hover:underline">Preorder</Link></li>
        <li><Link to="/customer-dashboard/in-season-now" className="hover:underline">In Season Now</Link></li>
      </ul>

      {/* Cart & Profile Icons */}
      <div className="relative flex items-center gap-6 text-white text-2xl">
        <Link to="/cart" className="hover:text-gray-400">
          <FiShoppingCart />
        </Link>


        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:text-gray-400">
            <FiUser />
          </button>
          
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-20">View Profile</Link>
              <Link to="/orders" className="block px-4 py-2 hover:bg-gray-20">My Orders</Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-20">Settings</Link>
              <button className="block px-4 py-2 text-red-500 hover:bg-gray-20 w-full text-left">Logout</button>
            </div>
          )}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
