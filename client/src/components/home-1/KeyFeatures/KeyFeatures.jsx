import React from "react";

const keyFeatures = [
  {
    image: "/assets/images/farmers.webp",
    title: "Farmers",
    features: [
      "🌱 Add & Manage Crops",
      "🔗 Buyer & NGO Direct Connections",
      "💰 Access to Crowdfunding & Support",
    ],
  },
  {
    image: "/assets/images/buyers.webp",
    title: "Buyers",
    features: [
      "🔍 Find Surplus & Organic Crops",
      "📦 Direct Orders from Farmers",
      "💳 Multiple Payment Options",
    ],
  },
  {
    image: "/assets/images/ngos.webp",
    title: "NGOs & Investors",
    features: [
      "💵 Fund Farmers & Purchase Crops",
      "✅ Transparent Crowdfunding Model",
    ],
  },
];

const KeyFeatures = () => {
  return (
    <div className="text-center py-10 px-5 bg-gray-100">
      <h2 className="text-2xl font-bold mb-8">Our Key Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[290px] object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <ul className="mt-2 space-y-1">
              {feature.features.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex justify-center items-center gap-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;