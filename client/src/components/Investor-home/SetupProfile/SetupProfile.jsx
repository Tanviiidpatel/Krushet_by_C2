import React, { useState } from "react";
import { FaArrowLeftLong, FaTrash, FaPlus } from "react-icons/fa6";

const SetupProfile = () => {
  const [email, setEmail] = useState("k");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hovered, setHovered] = useState(false);
  const [image, setImage] = useState(null);
  const [avatarColor, setAvatarColor] = useState("#00ff00");
  const colorOptions = ["#00ff00", "#ff0000", "#0000ff", "#ff9900"];

  return (
    <div
      className="h-screen w-screen flex mt-[10vh] justify-center bg-cover bg-center overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center w-[60vw] h-[70vh] p-6 rounded-lg bg-white/10 backdrop-blur-md text-white shadow-lg">
        
        <div className="self-start mb-4">
          <FaArrowLeftLong className="text-2xl text-black cursor-pointer" />
        </div> 

        <a className="text-black text-6xl font-extrabold cursor-pointer mb-15">
          Krushet
        </a>
        <div className="flex gap-32">
          {/* Avatar Section */}
          <div
            className="relative w-[15rem] h-[8rem] flex items-center justify-center rounded-full overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="w-[8rem] h-[8rem] flex items-center justify-center rounded-full border border-white"
              style={{ backgroundColor: avatarColor }}
            >
              {image ? (
                <img
                  src={image}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="text-3xl font-bold uppercase">
                  {firstName ? firstName.charAt(0) : email.charAt(0)}
                </div>
              )}
            </div>

            {hovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full border-2 border-white">
                {image ? (
                  <FaTrash
                    className="text-white text-xl cursor-pointer"
                    onClick={() => setImage(null)}
                  />
                ) : (
                  <FaPlus className="text-white text-xl cursor-pointer" />
                )}
                <input
                  type="file"
                  className="hidden"
                  name="profile-image"
                  accept=".png, .jpg, .jpeg, .svg, .webp"
                />
              </div>
            )}
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              disabled
              value={email}
              placeholder="Email"
              className="w-full text-black p-2 rounded-md placeholder-gray-400 border-1 border-black"
            />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full text-black p-2 rounded-md outline-none placeholder-gray-400 border-1 border-black"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full text-black p-2 rounded-md outline-none placeholder-gray-400 border-1 border-black"
            />

            <textarea
              type="text"
              rows={4}
              cols={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full text-black p-2 rounded-md outline-none placeholder-gray-400 border-1 border-black"
            />

            {/* Color Selection */}
            <div className="flex gap-4 mt-2">
              {colorOptions.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full cursor-pointer border-2 border-white transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                  onClick={() => setAvatarColor(color)}
                ></div>
              ))}
            </div>
            <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md w-1/2 text-lg">
              Save
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SetupProfile;
