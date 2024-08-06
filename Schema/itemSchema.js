import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
