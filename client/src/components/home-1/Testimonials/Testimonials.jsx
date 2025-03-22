import React from "react";

const testimonials = [
  {
    image: "/assets/images/farmer_love.webp",
    title: "🚜 For Farmers:",
    text: "🌾 Selling crops is now 40% faster & more profitable!",
  },
  {
    image: "/assets/images/buyer_love.webp",
    title: "🤝 For NGOs/Buyers:",
    text: "🤲 Lower costs & fresh produce sourced directly from farmers!",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Farmers & Buyers <span className="text-green-600">Love</span> Krushet!
      </h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-44 h-44 rounded-lg object-cover"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-green-600">{item.title}</h3>
              <p className="text-gray-600 text-lg mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;