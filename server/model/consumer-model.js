import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const consumerSchema = new mongoose.Schema({
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
    phone: {
        type: String,
        require: false,
    },
});

// secureing the password
consumerSchema.pre("save", async function (next){
    const consumer = this;

    if (!consumer.isModified("password")) {
        next();
    }

    try {
        const slatRound = await bcrypt.genSalt(10);
        const hash_password = bcrypt.hash(consumer.password, slatRound);
        consumer.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//compare the password 

consumerSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);    
};

//json web token 
consumerSchema.methods.generateToken = async function() {
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
const Consumer = new mongoose.model("Consumer", consumerSchema);
export default Consumer;