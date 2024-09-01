const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    nid: { type: String, required: true },
    registration: { type: Object, required: true },
    information: {
        type: Object,
        required: true,
        tin: String,
        taxPayersName: String,
        number: String,
        email: String,
        permanentAddress: String,
    },
    final_Preview: { type: Object, required: true },
    finalSubmission: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("FormData", formSchema);
