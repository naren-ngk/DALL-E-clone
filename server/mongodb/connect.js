import mongoose, { mongo } from "mongoose";

const connectDB = (url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url)
        .then(()=>console.log('Database Connected'))
        .catch((err)=>console.log(err));
}

export default connectDB;