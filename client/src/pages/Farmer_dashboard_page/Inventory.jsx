import React, { useState } from "react";
import { apple } from "../../assets/images";
// import avocado from "./images/avocado.png";
// import blueberries from "./images/blueberries.png";
// import cucumber from "./images/cucumber.png";
// import customerHeroSec from "./images/customerherosec.png";
// import eggplant from "./images/eggplant.png";


// Sample Data (Replace with actual API call to fetch real data)
const sampleCrops = [
  {
    id: 1,
    name: "Tomato",
    type: "Vegetable",
    quantity: 100,
    price: 30,
    
  },
  {
    id: 2,
    name: "Apple",
    type: "Fruit",
    quantity: 200,
    price: 50,
    
  },
  {
    id: 3,
    name: "Wheat",
    type: "Grain",
    quantity: 500,
    price: 20,
    
  },
  {
    id: 4,
    name: "Carrot",
    type: "Vegetable",
    quantity: 120,
    price: 15,
    
  },
  {
    id: 5,
    name: "Banana",
    type: "Fruit",
    quantity: 300,
    price: 25,
    
  },
  {
    id: 6,
    name: "Rice",
    type: "Grain",
    quantity: 1000,
    price: 18,
    
  },
];

const InventoryPage = () => {
  const [inventory, setInventory] = useState(sampleCrops);

  const handleDelete = (id) => {
    setInventory(inventory.filter((crop) => crop.id !== id));
  };

  return (
    <div className="w-full mx-auto p-3 bg-[#e9f8a5] ">

      <h1 className="text-4xl text-center text-gray-800 font-bold mb-10">
        Manage Your Crop Inventory
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl mb-15">
      {inventory.map((crop) => (
          <div
            key={crop.id}
            className="bg-white shadow-lg rounded-tl-lg rounded-br-lg overflow-hidden flex flex-col h-[450px] w-full max-w-[400px] transition-transform duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="w-full h-[50%] overflow-hidden">
              <img
                src={apple}
                alt={crop.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col p-5 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{crop.name}</h2>
              <p className="text-lg text-gray-600 mb-2">{crop.type}</p>
              <p className="text-xl text-green-600 font-bold mb-2">{crop.price} per kg</p>
              <p className="text-md text-gray-600 mb-4">Available: {crop.quantity} kg</p>

              {/* Action Buttons */}
              <div className="flex justify-between space-x-4">
                {/* Edit Button */}
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
                  onClick={() => alert(`Editing ${crop.name}`)}
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-red-600"
                  onClick={() => handleDelete(crop.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Inventory Available Message */}
      {inventory.length === 0 && (
        <div className="text-center text-lg text-gray-600 mt-10">
          No crops in your inventory yet. Start adding your crops!
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
