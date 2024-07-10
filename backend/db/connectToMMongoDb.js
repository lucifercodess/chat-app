import mongoose from "mongoose";
const connectToMongoDb  = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to mongo db");
    } catch (error) {
        console.log("error connecting to mongo db",error)
    }
}

export default connectToMongoDb;