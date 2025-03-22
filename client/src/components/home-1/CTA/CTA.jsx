import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="text-center p-12 bg-yellow-100 mt-10">
      <h2 className="text-2xl font-semibold text-green-800">
        Got Questions? We've Got Answers!
      </h2>
      <p className="text-gray-700 mt-2">
        Check out our FAQs or reach out to us for support.
      </p>
      
      <br />

      <Link 
        to="/faq" 
        className="bg-yellow-300 px-6 py-3 rounded-lg text-black font-medium hover:bg-yellow-400 transition shadow-md"
      >
        Ask a Question
      </Link>
    </section>
  );
};

export default CTA;
