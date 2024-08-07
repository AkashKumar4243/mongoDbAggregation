import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const uri = process.env.uri;

const connection = async () => {
    try {
        await mongoose.connect(uri+'/sample_mflix');
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
                $lookup : {
                    from : "movies",
                    localField : "movie_id",
                    foreignField : "_id",
                    as : "movie_details"
                }
            },
            {
                $limit : 2
            }
        ]
        const result = await db.collection('comments').aggregate(pipeline).toArray();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

Aggregation();