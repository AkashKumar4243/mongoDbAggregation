
import mongoose from 'mongoose';
import connection from './dbconnection.js';
import Order from './Schema/order.js';
import Customer from './Schema/customer.js';

const populateExample = async () => {
    await connection(); 

    try {
        const result = await Order.findOne({ orderId: 'O002' }).populate('customer'); 
        
        if (result) {
            console.log('Order with populated customer:', result);
        } else {
            console.log('No order found with the given orderId.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        await mongoose.disconnect(); 
    }
};

populateExample();

