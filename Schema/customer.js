import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customerId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
