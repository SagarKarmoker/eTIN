const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// POST
router.post("/something", adminController.something);

// GET

// PUT

// DELETE

module.exports = router;
