import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_ALL_CROPS, LIST_CROP_ROUTE } from "../../utils/constants.js"; // Replace with actual API endpoint


const AddCrop = () => {
  const [searchedCrop, setSearchedCrop] = useState("");
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(true);
  const [cropType, setCropType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchCrops = async () => {
      if (searchedCrop.trim() === "") {
        setCrops([]);
        return;
      }

      try {
        const res = await axios.post(GET_ALL_CROPS, { query: searchedCrop });
        setCrops(res.data);
      } catch (error) {
        console.error("Error fetching crops:", error);
      }
    };

    fetchCrops();
  }, [searchedCrop]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file (JPG, JPEG, PNG).");
    }
  };

  const handlePostListing = async () => {
    if (!selectedCrop || !cropType || !quantity || !price || !image) {
      alert("Please fill in all fields and upload an image before posting.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("productname", selectedCrop.name);
    formData.append("producttype", cropType);
    formData.append("productquantity", quantity);
    formData.append("price", price); // Ensure this is "price" (matches backend)
    formData.append("farmerId", localStorage.getItem("farmerId") || "67de679bf13f3ca2a43669db");
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:2203/api/crop/listingcrops", // Ensure correct endpoint
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response);

      setSuccessMessage("Listing posted successfully!");
      setSelectedCrop(null);
      setCropType("");
      setQuantity("");
      setPrice("");
      setSearchedCrop("");
      setCrops([]);
      setImage(null);
      setPreviewImage("");

    } catch (error) {
      console.error("Error posting listing:", error);
      alert("Failed to post listing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* White transparent overlay */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      {/* Center the content */}
      <div className="relative p-6 max-w-lg mx-auto  shadow-lg rounded-md font-sans z-10 ">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-4 border border-green-500 rounded-md bg-green-100 text-green-800 text-center font-semibold">
            {successMessage}
          </div>
        )}

        {/* Step 1: Search & Select Crop */}
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700 mt-10">
          Step 1: Search & Select a Crop
        </h2>
        <input
          type="text"
          value={searchedCrop}
          onChange={(e) => setSearchedCrop(e.target.value)}
          placeholder="Search for a crop..."
          className="w-full p-3 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 text-lg"
        />

        {crops.length > 0 && (
          <div className="border p-4 rounded-md bg-gray-100 max-h-48 overflow-y-auto">
            <ul>
              {crops.map((crop) => (
                <li
                  key={crop._id}
                  onClick={() => setSelectedCrop(crop)}
                  className="cursor-pointer p-3 hover:bg-green-200 rounded-md text-lg font-semibold text-gray-800"
                >
                  {crop.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Step 2: Selected Crop */}
        <div className="mb-6 p-4 border border-green-500 rounded-md bg-green-100">
          <h2 className="text-xl font-semibold text-green-800">
            Selected Crop: {selectedCrop.name}
          </h2>
          <button
            onClick={() => setSelectedCrop(null)}
            className="text-red-600 text-sm underline mt-2"
          >
            Change Crop
          </button>
        </div>

        {/* Step 3: Crop Description */}
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Step 2: Describe Your Crop</h2>

        <label className="font-semibold text-sm text-gray-700">Crop Type</label>
        <select
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
          className="w-full p-3 border rounded-md mb-4"
        >
          <option value="">Select Type</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Grain">Grain</option>
          <option value="Herb">Herb</option>
        </select>

        {/* Step 4: Quantity */}
        <label className="font-semibold text-sm text-gray-700">Quantity (in kg)</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
          className="w-full p-3 border rounded-md mb-4"
        />

        {/* Step 5: Price */}
        <label className="font-semibold text-sm text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          className="w-full p-3 border rounded-md mb-4"
        />

        {/* Step 6: Upload Image */}
        <label className="font-semibold text-sm text-gray-700">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-3 border rounded-md mb-4"
        />

        {/* Preview Image */}
        {previewImage && (
          <div className="mb-6">
            <img
              src={previewImage}
              alt="Crop Preview"
              className="w-full h-40 object-cover border rounded-md"
            />
          </div>
        )}

        {/* Post Listing Button */}
        <button
          onClick={handlePostListing}
          disabled={loading}
          className={`w-full p-4 text-white text-lg font-semibold rounded-md ${loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"}`}
        >
          {loading ? "Posting..." : "Post Listing"}
        </button>
      </div>
    </div>
  );
};

export default AddCrop;
