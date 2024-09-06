const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    nid: { type: String, required: true }, // NID is required
    registration: {
        taxPayerStatusA: { type: String, required: true },
        taxPayerStatusB: { type: String, required: true },
        registrationType: { type: String, required: true },
        purposeOfTIN: { type: String, required: true },
        mainSourceOfIncome: { type: String, required: true },
        location: { type: String, required: true },
        serviceLocation: { type: String, required: true },
    },
    information: {
        taxPayersName: { type: String, required: true },
        gender: { type: String, required: true },
        number: { type: String, required: true }, // NID or other identifier
        dob: { type: Date, required: true }, // Date of Birth as Date type
        fathersName: { type: String, required: true },
        mothersName: { type: String, required: true },
        spouseName: { type: String, required: false }, // Optional
        mobileNumber: { type: String, required: true },
        fax: { type: String, required: false }, // Optional
        email: { type: String, required: true },
        currentCountry: { type: String, required: true },
        currentAddress: { type: String, required: true },
        currentDistrict: { type: String, required: true },
        currentThana: { type: String, required: true },
        currentPostCode: { type: String, required: true },
        permanentAddress: { type: String, required: true },
        permanentCountry: { type: String, required: true },
        permanentDistrict: { type: String, required: true },
        permanentThana: { type: String, required: true },
        permanentPostCode: { type: String, required: true },
        otherDistrict: { type: String, required: false }, // Optional
        otherThana: { type: String, required: false }, // Optional
        tin: { type: String, required: false }, // Optional TIN number
    },
    final_Preview: {
        isChecked: { type: Boolean, required: true }, // Checkbox to confirm preview
        information: {
            taxPayersName: { type: String, required: true },
            gender: { type: String, required: true },
            number: { type: String, required: true },
            dob: { type: Date, required: true },
            fathersName: { type: String, required: true },
            mothersName: { type: String, required: true },
            spouseName: { type: String, required: false }, // Optional
            mobileNumber: { type: String, required: true },
            fax: { type: String, required: false }, // Optional
            email: { type: String, required: true },
            currentCountry: { type: String, required: true },
            currentAddress: { type: String, required: true },
            currentDistrict: { type: String, required: true },
            currentThana: { type: String, required: true },
            currentPostCode: { type: String, required: true },
            permanentAddress: { type: String, required: true },
            permanentCountry: { type: String, required: true },
            permanentDistrict: { type: String, required: true },
            permanentThana: { type: String, required: true },
            permanentPostCode: { type: String, required: true },
            otherDistrict: { type: String, required: false }, // Optional
            otherThana: { type: String, required: false }, // Optional
        },
        registration: {
            taxPayerStatusA: { type: String, required: true },
            taxPayerStatusB: { type: String, required: true },
            registrationType: { type: String, required: true },
            purposeOfTIN: { type: String, required: true },
            mainSourceOfIncome: { type: String, required: true },
            location: { type: String, required: true },
            serviceLocation: { type: String, required: true },
        },
        taxesZone: { type: String, required: true },
        taxesCircle: { type: String, required: true },
    },
    finalSubmission: { type: Boolean, default: false }, // Final submission status
}, { timestamps: true }); // Timestamps to automatically manage `createdAt` and `updatedAt`

module.exports = mongoose.model("FormData", formSchema);
