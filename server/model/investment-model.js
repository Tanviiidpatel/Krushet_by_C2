import mongoose from "mongoose";

const InvestmentSchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  investorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  amount: { type: Number, required: true }, 
  purpose: { type: String, required: true },
  description: { type: String, required: true },
  returnCash: { type: Boolean, default: false },
  returnCrop: { type: Boolean, default: false }, 
  cropKilos: { type: Number, default: 0 }, 
  returnPercentage: { type: Number, default: 0 }, 
  belowMarketPrice: { type: Number, default: 0 }, 
  status: { type: String, default: "Pending" }, 
  notifications: [{ message: String, timestamp: Date }] 
});

const Investment =  mongoose.model("Investment", InvestmentSchema);
export default Investment;