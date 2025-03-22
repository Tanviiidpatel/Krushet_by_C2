import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Krushet. All Rights Reserved.
        </p>

        {/* Footer Links */}
        <div className="space-x-4">
          <a href="#about" className="text-white hover:text-green-500">About</a>
          <a href="#privacy" className="text-white hover:text-green-500">Privacy</a>
          <a href="#terms" className="text-white hover:text-green-500">Terms</a>
          <a href="#contact" className="text-white hover:text-green-500">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
