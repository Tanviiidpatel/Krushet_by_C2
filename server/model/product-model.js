import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    productname: {
        type: String,
        require: true,
    },
    producttype:{
        type: String,
        require: true,
    },
    productquantity: {
        type: String,
        require: true,
    },
    productprize: {
        type: String,
        require: true,
    }

});

const Product = new mongoose.model("Product", productSchema);
export default Product;