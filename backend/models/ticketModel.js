const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ticketNumber: { type: String, required: true },
    name: { type: String, required: true },
    nid: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    requestType: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;