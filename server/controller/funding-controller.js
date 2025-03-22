import Funding from "../model/funding-model.js";
import User from "../model/farmer-model.js";

// Submit a funding request
export const requestFunding = async (req, res) => {
    try {
        const { amountRequested, purpose, description } = req.body;
        const farmerId = req.userId; // Extracted from authentication middleware

        if (!farmerId) {
            return res.status(401).json({ message: "Unauthorized: No farmer ID found" });
        }

        const fundingRequest = await Funding.create({
            farmerId,
            amountRequested,
            purpose,
            description
        });

        res.status(201).json({ message: "Funding request submitted successfully", fundingRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get all funding requests for a specific farmer
export const getFarmerFundingRequests = async (req, res) => {
    try {
        const farmerId = req.userId;

        if (!farmerId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const requests = await Funding.find({ farmerId });
        res.status(200).json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving funding requests" });
    }
};

// Get all funding requests (for investors)
export const getAllFundingRequests = async (req, res) => {
    try {
        const requests = await Funding.find().populate("farmerId", "username email");
        res.status(200).json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving all funding requests" });
    }
};

// Update funding request status (Admin/Investor action)
export const updateFundingStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        if (!["Pending", "Approved", "Rejected"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        const updatedRequest = await Funding.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedRequest) {
            return res.status(404).json({ message: "Funding request not found" });
        }

        res.status(200).json({ message: "Funding request status updated", updatedRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating funding request status" });
    }
};