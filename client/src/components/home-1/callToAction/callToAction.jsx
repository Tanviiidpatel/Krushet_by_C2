import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-5 my-10">
      <button 
        onClick={() => navigate("/register/Farmer")}
        className="px-5 py-3 text-lg font-bold text-white bg-green-600 rounded-md transition duration-300 hover:bg-green-700"
      >
        Sign Up as Farmer
      </button>
      <button 
        onClick={() => navigate("/register/Empowerer")}
        className="px-5 py-3 text-lg font-bold text-white bg-blue-600 rounded-md transition duration-300 hover:bg-blue-800"
      >
        Empower Farmers
      </button>
      <button 
        onClick={() => navigate("/register/Buyer")}
        className="px-5 py-3 text-lg font-bold text-white bg-orange-500 rounded-md transition duration-300 hover:bg-orange-600"
      >
        Register as Buyer
      </button>
    </div>
  );
};

export default CallToAction;