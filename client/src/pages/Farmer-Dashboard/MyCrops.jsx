import React, { useState } from "react";

const MyCrops = () => {
  const [crops, setCrops] = useState([
    { id: 1, name: "Wheat", quantity: "200kg", price: "₹25/kg", image: null, status: "Available" },
    { id: 2, name: "Carrots", quantity: "50kg", price: "₹30/kg", image: null, status: "Sold Out" },
    { id: 3, name: "Tomatoes", quantity: "100kg", price: "₹20/kg", image: null, status: "Accepting Orders" },
  ]);

  const [newCrop, setNewCrop] = useState({ id: null, name: "", quantity: "", price: "", image: null, status: "Available" });
  const [showForm, setShowForm] = useState(false);
  const [editingCropId, setEditingCropId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (e) => {
    setNewCrop({ ...newCrop, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCrop({ ...newCrop, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addOrUpdateCrop = () => {
    if (!newCrop.name || !newCrop.quantity || !newCrop.price || !newCrop.image) return;

    if (editingCropId !== null) {
      setCrops(crops.map((crop) => (crop.id === editingCropId ? { ...newCrop, id: editingCropId } : crop)));
      setEditingCropId(null);
    } else {
      setCrops([...crops, { id: crops.length + 1, ...newCrop }]);
    }

    setNewCrop({ id: null, name: "", quantity: "", price: "", image: null, status: "Available" });
    setShowForm(false);
  };

  const editCrop = (crop) => {
    setNewCrop(crop);
    setEditingCropId(crop.id);
    setShowForm(true);
  };

  const deleteCrop = (id) => {
    // ✅ Fixed: Only the selected crop is removed
    setCrops((prevCrops) => prevCrops.filter((crop) => crop.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Crops</h2>

      {/* Button to Show Form */}
      <button onClick={() => setShowForm(!showForm)} className="bg-green-600 text-white px-4 py-2 rounded mb-4">
        {showForm ? "Close Form" : "+ Add New Crop"}
      </button>

      {/* Add/Edit Crop Form */}
      {showForm && (
        <div className="border p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold mb-2">{editingCropId ? "Edit Crop" : "Add Crop Details"}</h3>
          <input
            type="text"
            name="name"
            placeholder="Crop Name"
            value={newCrop.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity (e.g., 50kg)"
            value={newCrop.quantity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="price"
            placeholder="Price (e.g., ₹20/kg)"
            value={newCrop.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded mb-2" />
          {newCrop.image && <img src={newCrop.image} alt="Preview" className="w-20 h-20 object-cover rounded mt-2" />}
          <button onClick={addOrUpdateCrop} className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
            {editingCropId ? "Update Crop" : "Save Crop"}
          </button>
        </div>
      )}

      {/* Crops List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crops.map((crop) => (
          <div key={crop.id} className="border p-4 rounded-lg shadow-md">
            {crop.image ? (
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-32 object-cover rounded cursor-pointer"
                onClick={() => setSelectedImage(crop.image)}
              />
            ) : (
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
            )}
            <h3 className="text-lg font-semibold mt-2">{crop.name}</h3>
            <p className="text-gray-600">Quantity: {crop.quantity}</p>
            <p className="text-gray-600">Price: {crop.price}</p>
            <p className={`mt-2 text-sm font-semibold ${crop.status === "Sold Out" ? "text-red-500" : "text-green-500"}`}>
              {crop.status}
            </p>
            <div className="flex justify-between mt-3">
              <button onClick={() => editCrop(crop)} className="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => deleteCrop(crop.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[500px] h-[500px] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              ✖
            </button>
            <img src={selectedImage} alt="Selected Crop" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCrops;
