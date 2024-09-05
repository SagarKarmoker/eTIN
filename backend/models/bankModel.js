const mongoose = require('mongoose');

// Define the schema for Transactions
const transactionSchema = new mongoose.Schema({
    transaction_id: { type: String, required: true },
    date: { type: Date, required: true },
    type: { type: String, enum: ['Deposit', 'Withdrawal'], required: true },
    amount: { type: Number, required: true },
    description: { type: String }
});

// Define the schema for Bank Details
const bankDetailsSchema = new mongoose.Schema({
    account_number: { type: String, required: true },
    account_type: { type: String, enum: ['Savings', 'Checking'], required: true },
    balance: { type: Number, required: true },
    currency: { type: String, required: true },
    transactions: [transactionSchema]
});

// Define the schema for Address
const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true }
});

// Define the main User schema
const bankSchema = new mongoose.Schema({
    nid: { type: String, required: true, unique: true },
    name: {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true }
    },
    dob: { type: String, required: true }, // If using Date, modify the format
    address: addressSchema,
    contact_info: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    bank_details: bankDetailsSchema,
    kyc_status: { type: String, enum: ['Verified', 'Pending', 'Rejected'], required: true }
}, {
    timestamps: true
});

// Create and export the User model
const Bank = mongoose.model('BankData', bankSchema);

module.exports = Bank;
