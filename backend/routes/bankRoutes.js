const express = require("express");
const router = express.Router();
const bankNrebateController = require("../controllers/bankNrebateController");

router.get("/get-bank-details", bankNrebateController.getBankDetails);
router.get("/get-rebate-details", bankNrebateController.getRebateDetails);

module.exports = router;
