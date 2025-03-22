import React, { useState } from "react";

const FarmerNeedsForm = () => {
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({
    crop: "",
    amount: "",
    reason: "",
    contact: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.crop || !formData.amount || !formData.reason || !formData.contact) {
      alert("All fields are required!");
      return;
    }

    setRequests([...requests, { ...formData, id: Date.now() }]);
    setFormData({ crop: "", amount: "", reason: "", contact: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-700 mb-4">Request Investment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="crop"
          placeholder="Crop Name"
          value={formData.crop}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Required Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="reason"
          placeholder="Reason for Investment"
          value={formData.reason}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Information"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Submit Request</button>
      </form>

      {/* Display Requests as Cards */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-green-700 mb-4">Farmer Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requests.length === 0 ? (
            <p className="text-gray-500">No requests yet.</p>
          ) : (
            requests.map((request) => (
              <div key={request.id} className="border p-4 rounded-lg shadow-md bg-gray-50">
                <h3 className="text-lg font-bold">{request.crop}</h3>
                <p><strong>Amount Needed:</strong> ₹{request.amount}</p>
                <p><strong>Reason:</strong> {request.reason}</p>
                <p><strong>Contact:</strong> {request.contact}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerNeedsForm;
