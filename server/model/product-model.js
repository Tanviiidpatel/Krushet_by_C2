import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true }, // Ensure productId exists
    productname: { type: String, required: true },
    producttype: { type: String, required: true },
    productquantity: { type: Number, required: true },
    productprize: { type: Number, required: true }, // Ensure correct field name
    farmerId: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
