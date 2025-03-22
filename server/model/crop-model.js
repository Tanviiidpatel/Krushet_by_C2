import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
});

const Crop = mongoose.model("Crop", cropSchema);
export default Crop;
