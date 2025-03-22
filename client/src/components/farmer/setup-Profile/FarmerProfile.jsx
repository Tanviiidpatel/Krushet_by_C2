import React, { useState } from "react";
import { FaArrowLeftLong, FaTrash, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const FarmerProfile = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("farmer@example.com");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [farmingType, setFarmingType] = useState("");
  const [mainCrops, setMainCrops] = useState("");
  const [experience, setExperience] = useState("");
  const [workers, setWorkers] = useState("");
  const [registration, setRegistration] = useState("");
  const [insurance, setInsurance] = useState("No");
  const [subsidies, setSubsidies] = useState("No");

  const [hovered, setHovered] = useState(false);
  const [image, setImage] = useState(null);
  const [avatarColor, setAvatarColor] = useState("#00ff00");
  const colorOptions = ["#00ff00", "#ff0000", "#0000ff", "#ff9900"];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file (JPG, JPEG, PNG).");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = new FormData();
    profileData.append("email", email);
    profileData.append("fullName", fullName);
    profileData.append("address", address);
    profileData.append("farmSize", farmSize);
    profileData.append("farmingType", farmingType);
    profileData.append("mainCrops", mainCrops);
    profileData.append("experience", experience);
    profileData.append("workers", workers);
    profileData.append("registration", registration);
    profileData.append("insurance", insurance);
    profileData.append("subsidies", subsidies);

    try {
      const res = await axios.post(LIST_PRODUCT_ROUTE, profileData);
      console.log(res);
      alert("Profile setup completed successfully!");
    //   navigate("/investment-seeking");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex mt-[8vh] justify-center bg-cover bg-center overflow-hidden">
      <div className="relative z-10 flex items-center w-[75vw] h-auto p-6 rounded-lg bg-white/10 backdrop-blur-md text-white shadow-lg">
        
        {/* Left Section (Avatar & Logo) */}
        <div className="flex flex-col items-center w-[25%]">
          <FaArrowLeftLong
            className="self-start text-2xl text-black cursor-pointer mb-4"
            onClick={() => navigate(-1)}
          />

          <a className="text-black text-5xl font-extrabold cursor-pointer mb-6">
            Krushet
          </a>

          <div
            className="relative w-[8rem] h-[8rem] flex items-center justify-center rounded-full overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="w-[8rem] h-[8rem] flex items-center justify-center rounded-full border border-white"
              style={{ backgroundColor: avatarColor }}
            >
              {image ? (
                <img src={image} alt="profile" className="w-full h-full object-cover rounded-full" />
              ) : (
                <div className="text-3xl font-bold uppercase">
                  {fullName ? fullName.charAt(0) : email.charAt(0)}
                </div>
              )}
            </div>

            {hovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full border-2 border-white">
                {image ? (
                  <FaTrash className="text-white text-xl cursor-pointer" onClick={() => setImage(null)} />
                ) : (
                  <label>
                    <FaPlus className="text-white text-xl cursor-pointer" />
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  </label>
                )}
              </div>
            )}
          </div>

          {/* Color Options */}
          <div className="flex gap-3 mt-4">
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className="w-7 h-7 rounded-full cursor-pointer border-2 border-white hover:scale-110"
                style={{ backgroundColor: color }}
                onClick={() => setAvatarColor(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-[75%] grid grid-cols-2 gap-4 p-4">
          <input
            type="text"
            disabled
            value={email}
            className="col-span-1 text-black p-2 rounded-md border-1 border-black w-[90%]"
          />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name / Farm Name"
            className="col-span-1 text-black p-2 rounded-md border-1 border-black w-[100%]"
          />
          <textarea
            rows={2}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Farm Address"
            className="col-span-2 text-black p-2 rounded-md border-1 border-black w-full"
          />
          <input
            type="text"
            value={farmSize}
            onChange={(e) => setFarmSize(e.target.value)}
            placeholder="Farm Size (acres/hectares)"
            className="col-span-1 text-black p-2 rounded-md border-1 border-black w-[90%]"
          />
          <select
            value={farmingType}
            onChange={(e) => setFarmingType(e.target.value)}
            className="col-span-1 text-black p-2 rounded-md border-1 border-black w-[100%]"
          >
            <option value="">Select Farming Type</option>
            <option value="Organic">Organic</option>
            <option value="Traditional">Traditional</option>
            <option value="Mixed">Mixed</option>
          </select>
          <input type="text" value={mainCrops} onChange={(e) => setMainCrops(e.target.value)} placeholder="Main Crops Grown" className="text-black p-2 rounded-md border-1 border-black w-[90%]" />
          <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Years of Experience" className="text-black p-2 rounded-md border-1 border-black w-[90%]" />

          <button onClick={handleSubmit} className="col-span-2 mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md w-full text-lg">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
