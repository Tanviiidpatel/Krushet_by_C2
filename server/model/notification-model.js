import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    farmerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Farmer", 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    isRead: { 
        type: Boolean, 
        default: false 
    }
}, { timestamps: true });
  
  export default mongoose.model("Notification", NotificationSchema);
  