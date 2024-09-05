const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Bank = require("../models/bankModel");
const Rebate = require("../models/rebateModel");

const SECRET_KEY = "super-secret-key";

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
