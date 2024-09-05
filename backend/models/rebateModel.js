const mongoose = require('mongoose');

// Define schema for Deferred Annuity
const deferredAnnuitySchema = new mongoose.Schema({
    policy_number: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    annuity_amount: { type: Number, required: true },
    currency: { type: String, required: true }
});

// Define schema for Deposit Pension
const depositPensionSchema = new mongoose.Schema({
    pension_id: { type: String, required: true },
    beneficiary_name: { type: String, required: true },
    start_date: { type: Date, required: true },
    monthly_contribution: { type: Number, required: true },
    currency: { type: String, required: true },
    maturity_date: { type: Date, required: true }
});

// Define schema for Government Securities
const governmentSecuritiesSchema = new mongoose.Schema({
    security_id: { type: String, required: true },
    holder_name: { type: String, required: true },
    type: { type: String, required: true },
    amount_invested: { type: Number, required: true },
    currency: { type: String, required: true },
    interest_rate: { type: Number, required: true },
    maturity_date: { type: Date, required: true }
});

// Define schema for Listed Securities
const listedSecuritiesSchema = new mongoose.Schema({
    security_id: { type: String, required: true },
    holder_name: { type: String, required: true },
    type: { type: String, required: true },
    company_name: { type: String, required: true },
    number_of_shares: { type: Number, required: true },
    share_price: { type: Number, required: true },
    currency: { type: String, required: true }
});

// Define schema for Provident Fund Act
const providentFundActSchema = new mongoose.Schema({
    fund_id: { type: String, required: true },
    employer_name: { type: String, required: true },
    employee_name: { type: String, required: true },
    monthly_contribution: { type: Number, required: true },
    start_date: { type: Date, required: true },
    currency: { type: String, required: true }
});

// Define schema for Approved Provident Fund
const approvedProvidentFundSchema = new mongoose.Schema({
    fund_id: { type: String, required: true },
    employer_name: { type: String, required: true },
    employee_name: { type: String, required: true },
    total_contribution: { type: Number, required: true },
    currency: { type: String, required: true },
    approval_status: { type: String, enum: ['Approved', 'Pending', 'Rejected'], required: true }
});

// Define schema for Annual Provident Contribution
const annualProvidentContributionSchema = new mongoose.Schema({
    contribution_id: { type: String, required: true },
    employee_name: { type: String, required: true },
    year: { type: String, required: true },
    total_contribution: { type: Number, required: true },
    currency: { type: String, required: true },
    employer_match_percentage: { type: Number, required: true }
});

// Define schema for Welfare Provident Fund
const welfareProvidentFundSchema = new mongoose.Schema({
    fund_id: { type: String, required: true },
    employer_name: { type: String, required: true },
    employee_name: { type: String, required: true },
    welfare_fund_amount: { type: Number, required: true },
    currency: { type: String, required: true },
    disbursement_date: { type: Date, required: true }
});

// Define schema for Residual Provident Fund
const residualProvidentFundSchema = new mongoose.Schema({
    fund_id: { type: String, required: true },
    employee_name: { type: String, required: true },
    total_fund: { type: Number, required: true },
    currency: { type: String, required: true },
    residual_balance: { type: Number, required: true },
    last_contribution_date: { type: Date, required: true }
});

// Define schema for Other
const otherSchema = new mongoose.Schema({
    category: { type: String, required: true },
    details: { type: String, required: true },
    reference_id: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true }
});

// Define the main Rebate schema
const rebateSchema = new mongoose.Schema({
    personal_info: {
        nid: { type: String, required: true, unique: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true }
    },
    DeferredAnnuity: deferredAnnuitySchema,
    DepositPension: depositPensionSchema,
    GovernmentSecurities: governmentSecuritiesSchema,
    ListedSecurities: listedSecuritiesSchema,
    ProvidentFundAct: providentFundActSchema,
    ApprovedProvidentFund: approvedProvidentFundSchema,
    AnnualProvidentContribution: annualProvidentContributionSchema,
    WelfareProvidentFund: welfareProvidentFundSchema,
    ResidualProvidentFund: residualProvidentFundSchema,
    Other: otherSchema
});

// Create and export the User model
const Rebate = mongoose.model('rebateList', rebateSchema);

module.exports = Rebate;
