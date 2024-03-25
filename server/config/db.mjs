import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(db);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
