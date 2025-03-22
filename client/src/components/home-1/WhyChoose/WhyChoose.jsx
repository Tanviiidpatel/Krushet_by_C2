import React from "react";

const benefits = [
  { icon: "🚜", title: "For Farmers", text: "Direct access to buyers, no middlemen. Faster sales and better profits." },
  { icon: "🏡", title: "For NGOs", text: "Affordable fresh produce directly from farmers. Supports sustainability." },
  { icon: "🏨", title: "For Hotels", text: "Direct purchase of fresh produce. Reduces cost and ensures quality." },
];

const WhyChoose = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-800 text-center md:text-left mb-6">
          Why Choose <span className="text-green-600">Krushet?</span>
        </h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl flex items-start gap-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <span className="text-2xl">{benefit.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-green-600">{benefit.title}</h3>
                <p className="text-gray-600 text-lg mt-2">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/assets/images/why_choose_krushet.webp"
        alt="Why Choose Krushet"
        className="w-full max-w-lg rounded-xl shadow-md mx-auto"
      />
    </section>
  );
};

export default WhyChoose;