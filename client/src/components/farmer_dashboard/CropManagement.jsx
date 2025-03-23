import React, { useState } from 'react';

const CropManagement = () => {
  const [cropData, setCropData] = useState({
    name: '',
    type: '',
    price: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCropData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to an API)
    console.log(cropData);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Add Crop Section */}
      <h2 className="text-2xl font-bold mb-4">Add Crop</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="cropName">Crop Name</label>
          <input
            type="text"
            id="cropName"
            name="name"
            value={cropData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="cropType">Crop Type</label>
          <input
            type="text"
            id="cropType"
            name="type"
            value={cropData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={cropData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={cropData.availability}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg"
        >
          Add Crop
        </button>
      </form>
    </div>
  );
};

export default CropManagement;
