import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const uri = process.env.uri;

const connection = async () => {
    try {
        await mongoose.connect(uri+'/sample_restaurants');
        console.log("mongo db connected");
        return mongoose.connection;
    } catch (error) {
        console.log(error);
    }
}

const Aggregation = async () => {
    try {
        const db = await connection();
        const pipeline = [
            {
                $match : {"cuisine" : "Chinese"}
            },{
                $count : "totalChinese"
            }
        ]
        const result = await db.collection('restaurants').aggregate(pipeline).toArray();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

Aggregation();