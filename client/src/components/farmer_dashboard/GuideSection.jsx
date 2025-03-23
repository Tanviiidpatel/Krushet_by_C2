import React from 'react';
import { FaSearch, FaEdit, FaCheckCircle } from 'react-icons/fa'; // Import icons

function GuideSection() {
  // Static array holding guide steps with heading, subheading, and icon
  const steps = [
    {
      id: 1,
      heading: "Step 1: Search Crop",
      subheading: "Search for the crop you want to add.",
      icon: <FaSearch className="text-4xl mb-2" />
    },
    {
      id: 2,
      heading: "Step 2: Fill Details",
      subheading: "Enter details like crop type, quantity, and price.",
      icon: <FaEdit className="text-4xl mb-2" />
    },
    {
      id: 3,
      heading: "Step 3: Submit",
      subheading: "Click submit to post your crop listing.",
      icon: <FaCheckCircle className="text-4xl mb-2" />
    }
  ];

  return (
    <div className="bg-[oklch(0.74_0.13_132.34)] p-6 rounded-lg shadow-md h-85">

      {/* Title */}
      <h1 className="text-4xl font-semibold text-center text-black-700 mb-6">
        How to Add Crops
      </h1>

      {/* Guide Steps */}
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            {/* Step Icon */}
            <div className="text-center mb-4">
              {step.icon}
            </div>
            {/* Heading */}
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{step.heading}</h3>
            {/* Subheading */}
            <p className="text-sm text-gray-500">{step.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuideSection;
