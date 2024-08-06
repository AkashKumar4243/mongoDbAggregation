import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const uri = process.env.uri;

const connectionDb = async () => {
    try {
        await mongoose.connect(uri+"/sample_airbnb");
        console.log("mongoDb connected");
        return mongoose.connection;
    } catch (error) {
        console.log("error occurred during mongodb connection", error);
        throw error; 
    }
};

const aggregate = async () => {
    try {
        const db = await connectionDb();
        const pipeline = [
            {
                $group : {_id : '$property_type'}
            }
        ];
        const res = await db.collection('listingsAndReviews').aggregate(pipeline).toArray();
        console.log(res);
    } catch (error) {
        console.log("error",error);
    }
}

aggregate();