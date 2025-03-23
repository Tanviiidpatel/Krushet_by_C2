import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    orderID: { 
        type: String, 
        required: true, 
        unique: true 
    },
    paymentID: { 
        type: String
    },
    payerID: { 
        type: String 
    },
    status: { 
        type: String, 
        required: true, 
        enum: ["CREATED", "COMPLETED", "FAILED"] 
    },
    amount: {
      currency: { 
        type: String, 
        required: true 
    },
      value: { 
        type: Number, 
        required: true 
    },
    },
    payerEmail: { 
        type: String 
    },
    payerName: { 
        type: String 
    },
    paymentMethod: { 
        type: String, 
        enum: ["PayPal", "Credit Card"], 
        default: "PayPal" 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
