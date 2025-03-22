import Farmer from "../model/farmer-model.js";


export const getFarmerProfile = async (req, res) => {
    try {
        const farmer = await Farmer.findById(req.params.id).select("-password");
        if (!farmer) return res.status(404).json({ message: "Farmer not found." });
        res.status(200).json(farmer);
    } catch (error) {
        res.status(500).json({ error: "Error fetching farmer profile" });
    }
};


export const updateFarmerProfile = async (req, res) => {
    try {
        const { farmName, farmAddress, farmSize, farmingType, mainCrops, experience, workers, businessRegistration } = req.body;
        let profileImage = req.file ? `/uploads/${req.file.filename}` : undefined;

        const updateData = { farmName, farmAddress, farmSize, farmingType, mainCrops, experience, workers, businessRegistration };
        if (profileImage) updateData.profileImage = profileImage;

        const updatedFarmer = await Farmer.findByIdAndUpdate(req.userId, updateData, { new: true });

        if (!updatedFarmer) return res.status(404).json({ message: "Farmer not found." });

        res.status(200).json(updatedFarmer);
    } catch (error) {
        res.status(500).json({ error: "Error updating farmer profile" });
    }
};
