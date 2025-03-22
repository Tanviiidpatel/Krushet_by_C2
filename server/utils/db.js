import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {

    const URI = process.env.DB_URI;

    try {
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection error");
        process.exit(0);
    }
};

export default connectDb;