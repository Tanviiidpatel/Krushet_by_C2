import Crop from "../model/crop-model.js"; 

export const searchCrops = async (req, res) => {
    try {
        const { query } = req.body; // Get search query from request body

        if (!query) {
            return res.status(400).json({ message: "Search query is required." });
        }

        // Case-insensitive regex search in MongoDB
        const crops = await Crop.find({ name: { $regex: query, $options: "i" } }).limit(10);

        res.json(crops);
    } catch (error) {
        res.status(500).json({ message: "Error fetching crops", error });
    }
};
