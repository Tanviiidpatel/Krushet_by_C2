import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_ALL_CROPS, LIST_CROP_ROUTE } from "../../../utils/constants"; // Replace with actual API endpoint

const AddCrop = () => {
  const [searchedCrop, setSearchedCrop] = useState("");
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);
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
    formData.append("price", price);
    formData.append(
      "farmerId",
      localStorage.getItem("farmerId") || "67de679bf13f3ca2a43669db"
    );
    formData.append("image", image);

    try {
      const response = await axios.post(LIST_CROP_ROUTE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 border border-green-500 rounded-md bg-green-100 text-green-800">
          {successMessage}
        </div>
      )}

      {/* Step 1: Search & Select Crop */}
      {!selectedCrop ? (
        <>
          <h2 className="text-lg font-semibold mb-2">
            step 1: Search & Select a Crop
          </h2>
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
        </>
      ) : (
        <>
          {/* Selected Crop */}
          <div className="mb-4 p-4 border border-green-500 rounded-md bg-green-100">
            <h2 className="text-lg font-semibold text-green-800">
              Selected Crop: {selectedCrop.name}
            </h2>
            <button
              onClick={() => setSelectedCrop(null)}
              className="text-red-600 text-sm underline"
            >
              Change Crop
            </button>
          </div>

          {/* Step 2: Select Crop Type */}
          <label>step 2: Describe your crop</label>
          <label className="block font-semibold">Crop Type</label>
          <select
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          >
            <option value="">Select Type</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Grain">Grain</option>
            <option value="Herb">Herb</option>
          </select>

          {/* Step 3: Enter Quantity */}
          <label className="block font-semibold">Quantity (in kg)</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            className="w-full p-2 border rounded-md mb-2"
          />

          {/* Step 4: Enter Price */}
          <label className="block font-semibold">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-full p-2 border rounded-md mb-4"
          />

          {/* Step 5: Upload Image */}
          <label className="block font-semibold">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded-md mb-2"
          />

          {/* Preview Image */}
          {previewImage && (
            <div className="mb-4">
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
            className={`w-full p-2 text-white rounded-md ${
              loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Posting..." : "Post Listing"}
          </button>
        </>
      )}
    </div>
  );
};

export default AddCrop;
