import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../store/index.js"; // Zustand store
import { HOST } from "../../../utils/constants.js";

const ProductDetail = () => {
  const { selectedProduct } = useAppStore();
  const navigate = useNavigate();
  const [farmer,setFarmer] = useState({
    name:"jojo",
    location: "london",
    contact: "9999999999"
});

  if (!selectedProduct) {
    return <div className="text-center text-xl">No product selected</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button onClick={() => navigate(-1)} className="mb-4 text-black cursor-pointer">← Back</button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={`${HOST}${selectedProduct.imageUrl}`}
          alt={selectedProduct.productname}
          className="w-full h-96 object-cover rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{selectedProduct.productname}</h1>
          <p className="text-gray-600 text-lg">Type: {selectedProduct.producttype}</p>
          <p className="text-gray-600 text-lg">Quantity: {selectedProduct.productquantity} kg</p>
          <p className="text-gray-600 text-lg">Price: ₹{selectedProduct.productprize}</p>

          <button className="w-full bg-yellow-500 text-white py-2 mt-4 rounded-md">
            Buy Now
          </button>

          {farmer && (
            <div className="mt-6 p-4 border rounded-md bg-gray-100">
              <h2 className="text-xl font-semibold">Farmer Details</h2>
              <p>Name: {farmer.name}</p>
              <p>Location: {farmer.location}</p>
              <p>Contact: {farmer.contact}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
