import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://gunnamsaketh00:dX0SK1i1Zg6scjrk@cluster0.pbdvu.mongodb.net/blogging');
    console.log("DB Connected");
}