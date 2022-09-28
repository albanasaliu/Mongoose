const mongoose = require("mongoose");

const GENDERS = ["M", "F", "Male", "Female", "male", "female"];

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    active: {
        type: Boolean,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: GENDERS,
    },
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;