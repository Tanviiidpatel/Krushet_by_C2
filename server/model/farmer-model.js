import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const farmerSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    farmName: { 
        type: String 
    },
    farmAddress: { 
        type: String 
    },
    farmSize: { 
        type: String 
    },
    farmingType: { 
        type: String 
    },
    mainCrops: { 
        type: String 
    },
    experience: { 
        type: Number 
    },
    workers: { 
        type: Number 
    },
    businessRegistration: { 
        type: String 
    },
    profileImage: { 
        type: String 
    }, // Store profile image URL
    averageRating: { 
        type: Number, 
        default: 0 
    },
}, { timestamps: true });

farmerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        next(error);
    }
});

farmerSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

farmerSchema.methods.generateToken = async function () {
    return jwt.sign({ userId: this._id, email: this.email }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });
};
// defining the user model
const User = new mongoose.model("User", farmerSchema);
export default User;