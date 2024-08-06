import mongoose from 'mongoose';
import Item from './itemSchema.js'; // Ensure this path is correct

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    orderDate: { type: Date, required: true },
    items: [Item.schema] // Embedding Item schema
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
