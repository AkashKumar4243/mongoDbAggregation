import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const uri = process.env.uri;

const connectionDb = async () => {
    try {
        await mongoose.connect(uri+'/sample_airbnb');
        console.log("mongoDb connected");
        return mongoose.connection;
    } catch (error) {
        console.log("monogo db is not connected");
    }
}

const Aggregation = async () => {
    try {
        const db = await connectionDb();
        const pipeline = [
            {
                $match : {property_type : "House"}
            },
            {
                $limit : 4
            },
            {
                $project : {
                    "name" : 1,
                    "bedrooms" : 1,
                    "price" : 1
                }
            }
        ];

        const result = await db.collection('listingsAndReviews').aggregate(pipeline).toArray();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

Aggregation();