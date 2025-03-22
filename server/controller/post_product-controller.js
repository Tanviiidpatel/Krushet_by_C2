import Product from "../model/product-model.js";
import User from "../model/farmer-model.js";

export const post_product = async (req, res) => {
    try {
        const { productname, producttype, productquantity, productprize } = req.body;
        const farmerId = req.userId; // Assuming userId is extracted from auth middleware

        if (!farmerId) {
            return res.status(401).json({ message: "Unauthorized: No farmer ID found" });
        }

        const productcreated = await Product.create({ 
            productname, 
            producttype, 
            productquantity, 
            productprize, 
            farmerId 
        });

        res.status(201).json({ 
            msg: "Product added successfully", 
            productId: productcreated._id 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const get_product = async (req, res) => {
    try {
        const farmerId = req.userId; // Get userId from authentication middleware

        if (!farmerId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const products = await Product.find({ farmerId });
        res.status(200).json(products);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving products." });
    }
};

export const get_all_products = async (req, res) => {
    try {
        const products = await Product.find().populate("farmerId", "username" , "email");
        res.status(200).json(products);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving all products." });
    }
};



export const update_product = async (req, res) => {
    try {
        const { productId } = req.params; // Get product ID from URL params
        const farmerId = req.userId; // Get the logged-in farmer ID
        const updateFields = req.body; // Fields to be updated

        // Check if the product exists and belongs to the logged-in farmer
        const product = await Product.findOne({ _id: productId, farmerId });

        if (!product) {
            return res.status(404).json({ message: "Product not found or unauthorized" });
        }

        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(productId, updateFields, { new: true });

        res.status(200).json({ message: "Product updated successfully", updatedProduct });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating the product." });
    }
};


//sorting functions based on prices 

export const price_sorting_ascending = async (req, res) => {
    try {
        const sortedProducts = await Product.find({ farmerId: req.userId }).sort({ productprize: 1 });
        res.status(200).json(sortedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error sorting products by price (ascending)." });
    }
};


export const price_sorting_descending = async (req, res) => {
    try {
        const sortedProducts = await Product.find({ farmerId: req.userId }).sort({ productprize: -1 });
        res.status(200).json(sortedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error sorting products by price (descending)." });
    }
};


//sorting functions based on names 

export const name_sorting_ascending = async (req, res) => {
    try {
        const sortedProducts = await Product.find({ farmerId: req.userId }).sort({ productname: 1 });
        res.status(200).json(sortedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error sorting products by name (ascending)." });
    }
};


export const name_sorting_descending = async (req, res) => {
    try {
        const sortedProducts = await Product.find({ farmerId: req.userId }).sort({ productname: -1 });
        res.status(200).json(sortedProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error sorting products by name (descending)." });
    }
};
