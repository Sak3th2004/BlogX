import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const ConnectDB = async () =>{
    try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected");
} catch (error) {
    console.error("Error connecting to DB:", error);
  }
}