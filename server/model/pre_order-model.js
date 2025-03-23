import mongoose from "mongoose";

const PreOrderSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  consumerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Assuming consumers are users
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true }, // Link to the farmer
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const PreOrder = mongoose.model("PreOrder", PreOrderSchema);
export default PreOrder;
