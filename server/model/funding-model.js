import mongoose from "mongoose";

const fundingSchema = new mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amountRequested: {
        type: Number,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Funding = mongoose.model("Funding", fundingSchema);
export default Funding;