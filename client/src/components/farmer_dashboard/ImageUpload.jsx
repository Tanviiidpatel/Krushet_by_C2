import React from "react";

const ImageUpload = ({ handleImageUpload, previewImage }) => {
  return (
    <div>
      <label className="block font-semibold">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full p-2 border rounded-md mb-2"
      />

      {previewImage && (
        <div className="mb-4">
          <img
            src={previewImage}
            alt="Crop Preview"
            className="w-full h-40 object-cover border rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
