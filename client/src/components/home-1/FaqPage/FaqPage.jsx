import React, { useState } from "react";

const faqs = [
  {
    category: "General Queries",
    questions: [
      { question: "How do I register?", answer: "Simply go to the Sign-Up page, enter your details, verify your email, and you're good to go." },
      { question: "Is Krushet available in all regions?", answer: "Currently, Krushet operates in selected regions. You can check availability during registration." },
      { question: "How do I change my details?", answer: "You can update your profile by going to the ‘Edit Profile’ section in your dashboard." }
    ]
  },
  {
    category: "Orders & Payments",
    questions: [
      { question: "How do I place an order?", answer: "Browse available products, add them to your cart, and proceed to checkout." },
      { question: "What payment methods are accepted?", answer: "We accept credit cards, debit cards, and selected UPI payments." },
      { question: "What is Krushet’s refund policy?", answer: "Refunds are available only for defective products. Contact support for more details." }
    ]
  },
  {
    category: "Farmers Section",
    questions: [
      { question: "Is it safe to list my crops for sale?", answer: "Yes, Krushet verifies buyers and ensures secure transactions for farmers." },
      { question: "Can I list my own product?", answer: "Absolutely! Farmers can list their crops along with descriptions and pricing." },
      { question: "How does the product growth work?", answer: "Farmers can track crop demand and get insights from consumer trends." }
    ]
  },
  {
    category: "Investors Section",
    questions: [
      { question: "How do investors support farmers?", answer: "Investors can fund farmers and purchase crops directly from them." }
    ]
  }
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[650px] bg-cover bg-center flex items-center justify-center text-white"
     style={{ backgroundImage: "url('/assets/images/how_we_can_help.webp')", backgroundSize: "cover", backgroundPosition: "center", width: "100%" }}
>
  <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
    <h1 className="text-3xl font-bold">How can we help?</h1>
    <input type="text" placeholder="Search for your question..."
           className="mt-4 px-4 py-2 w-80 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
  </div>
</div>


      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-12">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8 p-6 bg-green-100 rounded-lg">
            <h2 className="text-xl font-semibold">{section.category}</h2>
            <div className="mt-4">
              {section.questions.map((faq, index) => (
                <div key={index} className="mb-2 border-b border-gray-300">
                  <button className="w-full text-left py-3 flex justify-between items-center"
                          onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}>
                    <span className="text-lg">{faq.question}</span>
                    <span className="text-xl">{openIndex === `${sectionIndex}-${index}` ? "−" : "+"}</span>
                  </button>
                  {openIndex === `${sectionIndex}-${index}` && (
                    <p className="text-gray-700 p-3">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
