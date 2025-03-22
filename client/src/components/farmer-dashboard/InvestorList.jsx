import React, { useEffect, useState } from "react";
import axios from "axios";

const InvestorList = () => {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await axios.get("/data/crowdfundingData.json");
        setInvestors(response.data.investors);
      } catch (error) {
        console.error("Error fetching investor data:", error);
      }
    };
    fetchInvestors();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">💼 Interested Investors</h2>
      <ul className="space-y-4">
        {investors.map((investor) => (
          <li key={investor.id} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{investor.name}</h3>
            <p>Email: {investor.email}</p>
            <p>Investment: {investor.amount}</p>
            <p>Interest: {investor.interest}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestorList;
