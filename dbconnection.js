import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017/Aggregation';

const connection = async () => {
    try {
        await mongoose.connect(uri);
        console.log("mongoDb connected");
    } catch (error) {
        console.log("error occured during mongodb connection",error);
    }
};

export default connection;