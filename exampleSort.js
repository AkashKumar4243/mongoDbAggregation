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

const Aggregation = async () => {
    try {
        const db = await connectionDb();
        const pipeline = [
            {
                $sort : {"accommodates" : -1}
            },
            {
                $project : {
                    "name" : 1,
                    "accomodates" : 1
                }
            },
            {
                $limit : 7
            }
        ]
    const result = await db.collection('listingsAndReviews').aggregate(pipeline).toArray();
    console.log(result)
    } catch (error) {
        console.log(error)
    }
}

Aggregation();