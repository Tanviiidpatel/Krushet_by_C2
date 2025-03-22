import React, { useEffect, useState } from "react";
import axios from "axios";

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get("/data/crowdfundingData.json");
        setDonors(response.data.donors);
      } catch (error) {
        console.error("Error fetching donor data:", error);
      }
    };
    fetchDonors();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">💖 Recent Donors</h2>
      <ul className="space-y-4">
        {donors.map((donor) => (
          <li key={donor.id} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{donor.name}</h3>
            <p>Email: {donor.email}</p>
            <p>Amount: {donor.amount}</p>
            <p>Message: {donor.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
