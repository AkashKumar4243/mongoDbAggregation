import mongoose from "mongoose";
import connection from "./dbconnection.js";
import Customer from "./Schema/customer.js";
import Order from "./Schema/order.js";

// const insertData = async () => {
//     await connection();

//     const customers = [
//         {
//             customerId: 'C001',
//             name: 'John Doe',
//             email: 'john.doe@example.com'
//         },
//         {
//             customerId: 'C002',
//             name: 'Jane Smith',
//             email: 'jane.smith@example.com'
//         },
//         {
//             customerId: 'C003',
//             name: 'Alice Johnson',
//             email: 'alice.johnson@example.com'
//         }
//     ];

//     const orders = [
//         {
//             orderId: 'O1001',
//             customer: customerList._id,
//             orderDate: new Date('2024-07-20T00:00:00Z'),
//             items: [
//                 {
//                     productId: 'P001',
//                     quantity: 2,
//                     price: 10
//                 },
//                 {
//                     productId: 'P002',
//                     quantity: 1,
//                     price: 20
//                 }
//             ]
//         },
//         {
//             orderId: 'O1002',
//             customer: customerList._id,
//             orderDate: new Date('2024-07-21T00:00:00Z'),
//             items: [
//                 {
//                     productId: 'P003',
//                     quantity: 1,
//                     price: 15
//                 }
//             ]
//         },
//         {
//             orderId: 'O1003',
//             customer: customerList._id,
//             orderDate: new Date('2024-07-22T00:00:00Z'),
//             items: [
//                 {
//                     productId: 'P001',
//                     quantity: 1,
//                     price: 10
//                 },
//                 {
//                     productId: 'P004',
//                     quantity: 2,
//                     price: 25
//                 }
//             ]
//         }
//     ];
//     try {
//         const customerList = await Customer.insertMany(customers);
//         console.log("customer",customerList);

//         const OList = await Order.insertMany(orders);
//         console.log("orders",OList);

//     } catch (error) {
//         console.log("not able to insert data error occured",error);
//     }finally {
//         mongoose.disconnect();
//     }
// }

// insertData();

const insertDemoData = async () => {
    await connection(); // Connect to MongoDB

    try {
        // Create a demo customer
        const customer = new Customer({
            customerId: 'C001',
            name: 'John Doe',
            email: 'john.doe@example.com'
        });

        const savedCustomer = await customer.save();
        console.log('Customer saved:', savedCustomer);

        // Create demo items
        const items = [
            { productId: 'P001', quantity: 2, price: 19.99 },
            { productId: 'P002', quantity: 1, price: 29.99 }
        ];

        // Create a demo order
        const order = new Order({
            orderId: 'O002',
            customer: savedCustomer._id,
            orderDate: new Date(),
            items: items
        });

        const savedOrder = await order.save();
        console.log('Order saved:', savedOrder);

    } catch (error) {
        console.error('Error inserting demo data:', error);
    } finally {
        await mongoose.disconnect(); // Close the connection
    }
};

insertDemoData();
