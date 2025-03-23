import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { productsData } from "../../../data/productsData";
import { GET_ALL_FARMERS } from "../../../utils/constants";

const Preorder = () => {
  const navigate = useNavigate();
  
  const [preorderData, setPreorderData] = useState({
    product: "",
    quantity: "",
    farmerId: "", 
  });
  const [farmers,setFarmers] = useState([]);
  const [selectedFarmer,setSelectedFarmer] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPreorderData({ ...preorderData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getAllFarmerData = async () => {
      try{
        const res = await axios.get(GET_ALL_FARMERS);
        setFarmers(res.data);
      } catch(err){
        console.log(err.message)
      }
    }
  },[])

  // 🚀 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!preorderData.product || !preorderData.quantity) {
      setMessage("Please fill out all fields.");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user")); // Assuming user info is stored
      const response = await axios.post("http://localhost:5000/api/preorders", {
        ...preorderData,
        consumerId: user._id, // Assuming user is logged in
      });

      if (response.status === 201) {
        setMessage("Preorder placed successfully! ✅");
        setTimeout(() => navigate("/consumer/preorders"), 2000);
      }
    } catch (error) {
      console.error("Error placing preorder:", error);
      setMessage("Failed to place preorder. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* 🌟 Hero Section */}
      <div className="relative w-full h-80 flex items-center justify-center bg-green-100 text-white text-center px-4">
        <div>
          <h1 className="text-5xl font-bold text-green-800">Preorder Fresh & Exclusive!</h1>
          <p className="mt-2 text-lg text-gray-700">Be the first to enjoy upcoming seasonal produce.</p>
        </div>
      </div>

      {/* 📝 Preorder Form */}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-center text-green-700">Place Your Preorder</h2>

        {message && <p className="text-center mt-2 text-red-500">{message}</p>}



        <form onSubmit={handleSubmit} className="mt-4">
          {/* 📌 Select Product */}
          <label className="block text-gray-700 font-medium mb-2">Select Product:</label>
          <input
            name="product"
            value={preorderData.product}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
           />
            
          <label className="block text-gray-700 font-medium mt-4 mb-2">Quantity (kg):</label>
          <input
            type="number"
            name="quantity"
            value={preorderData.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            min="1"
          />

          <label className="block text-gray-700 font-medium mt-4 mb-2">Farmer ID</label>
          <input
            type="text"
            name="farmerId"
            value={preorderData.farmerId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="mt-6 w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
          >
            Place Preorder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Preorder;
