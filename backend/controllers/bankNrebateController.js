const Bank = require("../models/bankModel");
const Rebate = require("../models/rebateModel");
const User = require("../models/userModel");
const People = require("../models/peopleModel")
const Approved = require("../models/approvedModel");
const FormData = require("../models/formModel");

exports.getBankDetails = async (req, res) => {
    try {
        const { user } = req; // token -> user nid

        const response = await Bank.findOne({
            nid: user.nid,
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Error while retriving data" });
    }
};

exports.getRebateDetails = async (req, res) => {
    try {
        const { user } = req;

        const response = await Rebate.findOne({
            "personal_info.nid": user.nid,
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Error while retriving data" });
    }
}

// calculation for earn more than 5lacs taka
exports.getCalculatedTaxAmount = async (req, res) => {
    try {
        const { user } = req;

        const banks = await Bank.find({
            nid: user.nid,
        });

        const rebates = await Rebate.find({
            "personal_info.nid": user.nid,
        });

        // banks total 1 year salary
        let totalSalary = 0;
        banks.forEach((bank) => {
            totalSalary += bank.bank_details.monthly_salary_amount * 12;
        })

        let taxOnTotalSalary = 0;
        if (totalSalary <= 400000) {
            taxOnTotalSalary = 0;
        } else if (totalSalary > 400000 && totalSalary <= 800000) {
            taxOnTotalSalary = totalSalary * 0.1;
        } else if (totalSalary > 800000 && totalSalary <= 1200000) {
            taxOnTotalSalary = totalSalary * 0.15;
        } else if (totalSalary > 1200000 && totalSalary <= 2000000) {
            taxOnTotalSalary = totalSalary * 0.2;
        } else {
            taxOnTotalSalary = totalSalary * 0.25;
        }

        // rebates total


    } catch (error) {
        res.status(500).json({ error: "Error while retriving data" });
    }
}

exports.getCalculatedTaxAmountForSinglePageReturn = async (req, res) => {
    try {
        const { user } = req;

        const banks = await Bank.find({
            nid: user.nid,
        });

        const rebates = await Rebate.findOne({
            "personal_info.nid": user.nid,
        });

        // banks total 1 year salary
        let totalSalary = 0;
        banks.forEach((bank) => {
            totalSalary += bank.bank_details.monthly_salary_amount * 12;
        })

        // checking total salary for 12 months
        if (totalSalary >= 500000) {
            res.status(200).json({ message: "No single page tax return for you" });
        }

        // tax ratio 1
        const taxRatioOne = banks[0].gender == 'male' && (calculateAge(banks[0].dob) >= 18 || calculateAge(banks[0].dob) <= 65);

        // total tax amount
        let initialTaxAmount = 0;
        let remainingAmount = totalSalary - 350000;
        if (taxRatioOne && remainingAmount > 100000) {
            initialTaxAmount = 5000 + (remainingAmount - 100000) * 0.1;
        }

        // rebates total
        let totalRebate = 0;
        totalRebate += rebates.DeferredAnnuity.annuity_amount * 12;
        totalRebate += rebates.DepositPension.monthly_contribution * 12;
        totalRebate += rebates.GovernmentSecurities.amount_invested; // 1 year total
        totalRebate += rebates.ListedSecurities.number_of_shares * rebates.ListedSecurities.share_price;
        totalRebate += rebates.ProvidentFundAct.monthly_contribution * 12;
        totalRebate += rebates.ApprovedProvidentFund.total_contribution; // 1 year total
        totalRebate += rebates.AnnualProvidentContribution.total_contribution; // 1 year total
        totalRebate += rebates.WelfareProvidentFund.welfare_fund_amount * 12;
        totalRebate += rebates.ResidualProvidentFund.total_fund;
        totalRebate += rebates.Other.amount;

        let rebate1 = totalSalary * 0.03; // on income 3%
        let rebate2 = totalRebate * 0.15; // on investment 15%
        let rebate3 = 1000000; // 10 lac

        let totalRebateAmount = lowest(rebate1, lowest(rebate2, rebate3));

        // getUserDetails
        const userDetails = await findUserDetails(user.nid);

        userDetails.total_income = totalSalary;
        userDetails.total_assets = totalRebate;
        userDetails.tax_rebate = totalRebateAmount;
        userDetails.tax_deducted_collected_at_source = totalSalary / 12 * 0.1; // 10% of total salary
        userDetails.chargable_tax = initialTaxAmount - (totalRebateAmount + userDetails.tax_deducted_collected_at_source) < 0 ? 5000 : initialTaxAmount - (totalRebateAmount + userDetails.tax_deducted_collected_at_source);
        userDetails.lifesyle_expenses = 0; // user defined

        res.status(200).json({
            message: "Single page tax return for you", result: {
                "rebate1": rebate1,
                "rebate2": rebate2,
                "rebate3": rebate3,
                "totalRebateAmount": totalRebateAmount,
                "totalSalary": totalSalary,
                "totalRebate": totalRebate,
                "initialTaxAmount": initialTaxAmount,
                "remainingTaxAmount": initialTaxAmount - totalRebateAmount,
                "actualTaxAmount": initialTaxAmount - totalRebateAmount < 0 ? 5000 : initialTaxAmount - totalRebateAmount
            },
            userDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Error while retriving data", error });
    }
}

const findUserDetails = async (nid) => {
    try {

        const userDetails = {
            fullName: '',
            father_name: '',
            nid,
            tin: '',
            circle: '',
            tax_zone: '',
            assessment_year: '2023-2024',
            residential_status: '', //user input
            address_of_contact: '',
            mobile_number: '',
            source_of_income: '',
            total_assets: '',
            total_income: '',
            chargable_tax: '',
            tax_rebate: '',
            tax_deducted_collected_at_source: '',
            tax_paid_with_this_return: '',
            lifesyle_expenses: '',
        };

        const name_n_father_name = await People.findOne({
            nidNumber: nid,
        });
        console.log(name_n_father_name)

        userDetails.fullName = name_n_father_name.fullNameEnglish;
        userDetails.father_name = name_n_father_name.father;

        const approved_kyc = await Approved.find({
            nid: nid,
        });

        userDetails.mobile_number = approved_kyc[0].phoneNumber;

        const tin = await FormData.find({
            nid: nid,
        });

        userDetails.tin = tin[0].information.tin;
        userDetails.circle = tin[0].final_Preview.taxesCircle;
        userDetails.tax_zone = tin[0].final_Preview.taxesZone;
        userDetails.source_of_income = tin[0].final_Preview.registration.mainSourceOfIncome;
        userDetails.address_of_contact = tin[0].information.permanentAddress;

        return userDetails;
    } catch (error) {
        console.log(error)
    }
}

function calculateAge(dateString) {
    // Split the input string into day, month, and year
    const [day, month, year] = dateString.split('-');

    // Create a new Date object from the provided date
    const birthDate = new Date(`${year}-${month}-${day}`);

    // Get today's date
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if the birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function lowest(a, b) {
    return a < b ? a : b;
}