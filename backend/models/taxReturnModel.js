const mongoose = require('mongoose');

const taxReturnSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    father_name: { type: String, required: true },
    nid: { type: String, required: true },
    tin: { type: String, required: true },
    circle: { type: String, required: true },
    tax_zone: { type: String, required: true },
    assessment_year: { type: String, required: true },
    residential_status: { type: String, required: true },
    address_of_contact: { type: String, required: true },
    mobile_number: { type: String, required: true },
    source_of_income: { type: String, required: true },
    total_assets: { type: Number, required: true },
    total_income: { type: Number, required: true },
    chargable_tax: { type: Number, required: true },
    tax_rebate: { type: Number, required: true },
    tax_deducted_collected_at_source: { type: Number, required: true },
    tax_paid_with_this_return: { type: Number, default: 0 },  // Defaulting to 0 if not provided
    lifestyle_expenses: { type: String, required: true },
    isSinglePageReturn: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('TaxReturn', taxReturnSchema);
