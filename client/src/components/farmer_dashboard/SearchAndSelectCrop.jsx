import React from "react";

const SearchAndSelectCrop = ({ searchedCrop, setSearchedCrop, crops, setSelectedCrop }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Step 1: Search & Select a Crop</h2>
      <input
        type="text"
        value={searchedCrop}
        onChange={(e) => setSearchedCrop(e.target.value)}
        placeholder="Search for a crop..."
        className="w-full p-2 border rounded-md mb-2"
      />

      {crops.length > 0 && (
        <div className="border p-2 rounded-md bg-gray-100 max-h-40 overflow-y-auto">
          <ul>
            {crops.map((crop) => (
              <li
                key={crop._id}
                onClick={() => setSelectedCrop(crop)}
                className="cursor-pointer p-2 hover:bg-green-200 rounded-md"
              >
                {crop.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchAndSelectCrop;
