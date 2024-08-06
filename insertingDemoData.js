import mongoose from "mongoose";
import connection from "./dbconnection.js";
import Customer from "./Schema/customer.js";
import Order from "./Schema/order.js";

const insertData = async () => {
    await connection();

    const customers = [
        {
            customerId: 'C001',
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            customerId: 'C002',
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
        },
        {
            customerId: 'C003',
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com'
        }
    ];

    const orders = [
        {
            orderId: 'O1001',
            customerId: 'C001',
            orderDate: new Date('2024-07-20T00:00:00Z'),
            items: [
                {
                    productId: 'P001',
                    quantity: 2,
                    price: 10
                },
                {
                    productId: 'P002',
                    quantity: 1,
                    price: 20
                }
            ]
        },
        {
            orderId: 'O1002',
            customerId: 'C002',
            orderDate: new Date('2024-07-21T00:00:00Z'),
            items: [
                {
                    productId: 'P003',
                    quantity: 1,
                    price: 15
                }
            ]
        },
        {
            orderId: 'O1003',
            customerId: 'C003',
            orderDate: new Date('2024-07-22T00:00:00Z'),
            items: [
                {
                    productId: 'P001',
                    quantity: 1,
                    price: 10
                },
                {
                    productId: 'P004',
                    quantity: 2,
                    price: 25
                }
            ]
        }
    ];
    try {
        const cList = await Customer.insertMany(customers);
        console.log("customer",cList);

        const OList = await Order.insertMany(orders);
        console.log("orders",OList);

    } catch (error) {
        console.log("not able to insert data error occured",error);
    }finally {
        mongoose.disconnect();
    }
}

insertData();