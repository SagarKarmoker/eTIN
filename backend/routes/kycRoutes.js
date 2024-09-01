const express = require("express");
const router = express.Router();
const kycController = require("../controllers/kycController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/people-data", authMiddleware, kycController.getPeopleData);

module.exports = router;
