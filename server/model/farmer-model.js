import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const farmerSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

// secureing the password
farmerSchema.pre("save", async function (next){
    const farmer = this;

    if (!farmer.isModified("password")) {
        next();
    }

    try {
        const slatRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(farmer.password, slatRound);
        farmer.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//compare the password 

farmerSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);    
};

//json web token 
farmerSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn: "30d",
        }
    );
    } catch (error) {
        console.error(error);
    }
};

// defining the user model
const User = new mongoose.model("User", farmerSchema);
export default User;