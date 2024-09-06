const mongoose = require("mongoose");

const pepoleSchema = new mongoose.Schema({
    fullNameEnglish: String,
    fullNameBangla: String,
    father: String,
    mother: String,
    dateOfBirth: String,
    nidNumber: String,
    address: String,
    bloodGroup: String,
});

module.exports = mongoose.model("People", pepoleSchema);