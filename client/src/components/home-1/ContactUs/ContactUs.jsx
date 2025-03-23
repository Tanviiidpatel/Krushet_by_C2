import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-r from-green-200 to-green-400">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-5xl p-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-3 text-gray-600 text-lg">
            We'd love to hear from you! Reach out with any questions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <form className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 shadow-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 shadow-sm"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 shadow-sm"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-600 text-2xl" />
              <span className="text-gray-900 text-lg font-medium">info@youragristartup.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-yellow-600 text-2xl" />
              <span className="text-gray-900 text-lg font-medium">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-yellow-600 text-2xl" />
              <span className="text-gray-900 text-lg font-medium">123 Agriculture Lane, Farmville, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
