import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    customerId: { type: String, required: true },
    orderDate: { type: Date, required: true },
    items: { type: [itemSchema], required: true }
    // items: [itemSchema]
});

const Order = mongoose.model('Order', orderSchema);
export default Order;