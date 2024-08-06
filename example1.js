import mongoose from "mongoose";
import connection from "./dbconnection.js";
import Order from "./Schema/order.js";


const Aggregation = async () => {
    await connection();

    try {
        const pipeline = [
            {
                $lookup : {
                    from : 'customers',
                    localField : 'customerId',
                    foreignField : 'customerId',
                    as : "result"
                }
            },
            {
                $unwind : '$result'
            },
            {
                $project : {
                    orderId : 1,
                    orderDate : 1,
                    'result.name' : 1,
                    'result.email' : 1,
                    //if all details is desired
                    //result : 1
                }
            }
        ];
        const result = await Order.aggregate(pipeline).exec();
        console.log("result :",result);
    } catch (error) {
        console.log("error occured" , error);
    } finally {
        mongoose.disconnect();
    }
}

Aggregation();

// pipeline using lookup
// use populate method
