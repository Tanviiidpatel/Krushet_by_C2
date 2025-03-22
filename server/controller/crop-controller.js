import Crop from "../model/crop-model.js"; 
import Product from "../model/product-model.js";
import fs from "fs";
import path from "path";

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
        console.log("Received Data:", req.body); // Log received data

        const { productname, producttype, productquantity, price, farmerId } = req.body;

        if (!productname || !producttype || !productquantity || !price || !farmerId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!req.file) {
            return res.status(400).send("File is required");
        }

        const date = Date.now();
        const fileExtension = path.extname(req.file.originalname);
        const fileName = `uploads/listings/${date}${fileExtension}`;
        fs.renameSync(req.file.path, fileName);

        const product = new Product({
            productId: new Date().getTime().toString(),
            productname,
            producttype,
            productquantity,
            productprize: price, // Ensure this matches frontend
            farmerId,
            imageUrl: `/${fileName}`
        });

        await product.save();

        res.status(201).json({ message: "Listing posted successfully!", product });

    } catch (error) {
        console.error("Error in postCropListing:", error);
        res.status(500).json({ error: "Failed to post listing" });
    }
};
