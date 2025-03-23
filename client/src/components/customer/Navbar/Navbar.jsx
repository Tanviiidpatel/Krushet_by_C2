import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-10 py-4 bg-black shadow-lg h-20">
      
      {/* Logo */}
      <div className="pl-6 flex items-center gap-6">
        <span className="text-2xl font-extrabold text-white ml-16 tracking-wide">
          Krushet
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-white font-medium text-lg">
        <li><Link to="/consumer" className="hover:text-green-400 transition">Home</Link></li>
        <li><Link to="/consumer/shop" className="hover:text-green-400 transition">Shop</Link></li>
        <li><Link to="/consumer/preorder" className="hover:text-green-400 transition">Preorder</Link></li>
        <li><Link to="/consumer/in-season-now" className="hover:text-green-400 transition">In Season Now</Link></li>
      </ul>

      {/* Cart & Profile Icons */}
      <div className="relative flex items-center gap-6 text-white text-2xl">
        <Link to="/cart" className="hover:text-green-400 transition">
          <FiShoppingCart />
        </Link>

        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:text-green-400 transition">
            <FiUser />
          </button>
          
          {isOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white text-black shadow-xl rounded-lg border border-gray-200">
              <Link to="/profile" className="block px-4 py-3 hover:bg-gray-100 transition">View Profile</Link>
              <Link to="/orders" className="block px-4 py-3 hover:bg-gray-100 transition">My Orders</Link>
              <Link to="/settings" className="block px-4 py-3 hover:bg-gray-100 transition">Settings</Link>
              <button className="block px-4 py-3 text-red-600 hover:bg-gray-100 transition w-full text-left">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  