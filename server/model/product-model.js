import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    productname: {
        type: String,
        required: true,
    },
    producttype: {
        type: String,
        required: true,
    },
    productquantity: {
        type: Number,  // Use Number for better calculations
        required: true,
    },
    productprize: {
        type: Number,  // Use Number for sorting and calculations
        required: true,
    },
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  // Reference to the User (Farmer)
        required: true,
    },
    imageUrl: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
