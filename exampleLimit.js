import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const uri = process.env.uri;

const connectionDb = async () => {
    try {
        await mongoose.connect(uri+"/sample_restaurants");
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
        const  pipeline = [{
            $limit : 1
        }]
        const result = await db.collection('restaurants').aggregate(pipeline).toArray();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

aggregate();