export const fetchInvestmentRecommendation = async (req, res) => {
    try {
        const { amount, risk, investmentDuration, prefferedRegion, sustainabilityPreference, marketFocus } = req.body;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.INVESTORAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "mistralai/mistral-7b-instruct:free",  
                messages: [
                    { role: "system", content: "You are an AI financial advisor specializing in agriculture investments. Respond in JSON format only." },
                    { role: "user", content: `
                        Based on the following investor details, recommend 3-5 crops for investment in JSON format:

                        **Investor Details:**
                        - Investment Amount (in rupees): ${amount} 
                        - Risk Appetite: ${risk}
                        - Investment Duration: ${investmentDuration} months
                        - Preferred Region: ${prefferedRegion || "none"}  
                        - Sustainability Preference: ${sustainabilityPreference}
                        - Market Focus: ${marketFocus}

                        **Return a JSON response in this format:**
                        {
                            "crops": [
                                {
                                    "name": "Crop Name",
                                    "market_demand": "High/Medium/Low",
                                    "climate_suitability": "Best suited for [region]",
                                    "expected_yield": "X tons per acre",
                                    "market price(in rupees)" X rupees per kg,
                                    "roi": "X% return on investment",
                                    "risk_factors": ["Factor 1", "Factor 2"],
                                    "government_subsidies": "Yes/No"
                                }
                            ],
                            "final_recommendation": "Best crop based on analysis is [Crop Name]"
                        }

                        **Only return JSON, no extra text.**
                    `}
                ]
            })
        });

        const data = await response.json();
        
        // Ensure the response is properly formatted
        let recommendation;
        try {
            recommendation = JSON.parse(data.choices[0].message.content);
        } catch (jsonError) {
            console.error("Invalid JSON received from AI:", data);
            return res.status(500).json({ error: "AI response format error" });
        }

        console.log("AI Recommendation:", recommendation);

        res.json(recommendation);

    } catch (error) {
        console.error("Error fetching investment recommendation:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
