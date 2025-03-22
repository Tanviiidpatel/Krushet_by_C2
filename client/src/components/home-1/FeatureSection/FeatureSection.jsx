const features = [
    {
      image: "/assets/images/direct_crop_selling.webp",
      title: "Direct Crop Selling",
      description: "Farmers sell directly without middlemen.",
    },
    // {
    //   image: "/assets/images/ai-monitoring.webp",
    //   title: "AI-Based Crop Monitoring",
    //   description: "Smart technology for better farming decisions.",
    // },
    {
      image: "/assets/images/buyers-ngos.webp",
      title: "Connect with Buyers & NGOs",
      description: "Direct marketplace for farmers and buyers.",
    },
    {
      image: "/assets/images/fair-pricing.webp",
      title: "Fair Pricing & Transparent Payments",
      description: "Ensuring no hidden charges or unfair pricing.",
    },
    {
      image: "/assets/images/crowdfunding.webp",
      title: "Crowdfunding & Donations for Farmers",
      description: "NGOs and donors supporting farmers.",
    },
  ];
  
  const FeatureSection = () => {
    return (
      <div className="text-center bg-gray-100 py-20 px-5">
        <h2 className="text-3xl font-bold mb-8">Why Khruset Stands Out</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-72 object-contain rounded-md"
              />
              <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeatureSection;