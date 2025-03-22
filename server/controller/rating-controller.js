import Product from "../model/product-model.js";
import User from "../model/farmer-model.js";

export const rateProduct = async (req, res) => {
    try {
        const { productId, rating } = req.body;
        const userId = req.userId; 

        if (!productId || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Invalid rating value." });
        }

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found." });

        const existingRating = product.ratings.find((r) => r.userId.toString() === userId);
        if (existingRating) {
            existingRating.rating = rating; 
        } else {
            product.ratings.push({ userId, rating }); 
        }

        await product.save();
        await updateFarmerRating(product.farmerId);

        res.status(200).json({ message: "Rating submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateFarmerRating = async (farmerId) => {
    const products = await Product.find({ farmerId });

    if (products.length === 0) return;

    const totalRatings = products.reduce((acc, product) => {
        const productRatingSum = product.ratings.reduce((sum, r) => sum + r.rating, 0);
        return acc + productRatingSum;
    }, 0);

    const totalReviews = products.reduce((acc, product) => acc + product.ratings.length, 0);
    
    const averageRating = totalReviews > 0 ? (totalRatings / totalReviews).toFixed(1) : 0;

    await User.findByIdAndUpdate(farmerId, { averageRating });
};
