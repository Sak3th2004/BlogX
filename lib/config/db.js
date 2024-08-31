import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const ConnectDB = async () =>{
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected");
}