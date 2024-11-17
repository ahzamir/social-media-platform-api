import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load envirnoment variables from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected Successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;