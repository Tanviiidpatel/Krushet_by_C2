import React from "react";

const CropDescription = ({ cropType, setCropType, quantity, setQuantity, price, setPrice }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Step 2: Describe your crop</h2>

      {/* Crop Type */}
      <label className="block font-semibold mb-2">Crop Type</label>
      <select
        value={cropType}
        onChange={(e) => setCropType(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      >
        <option value="">Select Type</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Grain">Grain</option>
        <option value="Herb">Herb</option>
      </select>

      {/* Quantity */}
      <label className="block font-semibold mb-2">Quantity (in kg)</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
        className="w-full p-2 border rounded-md mb-4"
      />

      {/* Price */}
      <label className="block font-semibold mb-2">Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
        className="w-full p-2 border rounded-md mb-4"
      />
    </div>
  );
};

export default CropDescription;
