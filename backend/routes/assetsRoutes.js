const express = require("express");
const router = express.Router();
const bankNrebateController = require("../controllers/bankNrebateController");
const authMiddleware = require("../middlewares/authMiddleware");

// GET
router.get("/get-bank-details", authMiddleware, bankNrebateController.getBankDetails);
router.get("/get-rebate-details", authMiddleware, bankNrebateController.getRebateDetails);

// POST

module.exports = router;
