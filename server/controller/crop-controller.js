import Crop from "../model/crop-model.js"; 
import Product from "../model/product-model.js";

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


export const postCropListing = async (req, res) => {
    try {
        const { productname, producttype, productquantity, productprize, farmerId } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : ""; // Fixed syntax

        // Ensure the farmer exists
        if (!farmerId) {
            return res.status(400).json({ message: "Farmer ID is required" });
        }

        // Create and save the product
        const product = new Product({
            productname,
            producttype,
            productquantity,
            productprize,
            farmerId,
            imageUrl
        });

        await product.save();

        res.status(201).json({ message: "Listing posted successfully!", product });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to post listing" });
    }
};
