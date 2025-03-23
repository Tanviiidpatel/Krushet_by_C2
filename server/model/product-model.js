import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productId: { 
        type: String, 
        required: true, 
        unique: true 
    }, 
    productname: { 
        type: String, 
        required: true 
    },
    producttype: { 
        type: String, 
        required: true 
    },
    productquantity: { 
        type: Number, 
        required: true 
    },
    productprize: { 
        type: Number, 
        required: true 
    },
    farmerId: { 
        type: String, 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    ratings: [{ 
        userId: mongoose.Schema.Types.ObjectId, 
        rating: Number 
    }],
    status: { 
        type: String, 
        enum: ["available", "sold"], 
        default: "available" 
    }
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
