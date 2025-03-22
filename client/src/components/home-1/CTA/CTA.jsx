import React from "react";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <section className="text-center p-12 bg-gray-100">
      <h2 className="text-2xl font-semibold">Got Questions? We've Got Answers!</h2>
      <br />
      <br />

<Link to="/faq" className="bg-yellow-400 px-6 py-3 rounded-lg text-black hover:bg-yellow-500 transition">
 Ask a Question
 </Link>
{/* <button className="bg-green-600 text-white px-5 py-2 rounded-md transition duration-300 hover:bg-green-700">
        Ask a Question
      </button> */}
    </section>
  );
};

export default CTA;