import React from "react";

const SuccessMessage = ({ successMessage }) => {
  return (
    successMessage && (
      <div className="mb-4 p-4 border border-green-500 rounded-md bg-green-100 text-green-800">
        {successMessage}
      </div>
    )
  );
};

export default SuccessMessage;
