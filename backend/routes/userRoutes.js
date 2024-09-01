const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// POST
router.post("/change-contact", authMiddleware, userController.changeContact);

// GET
router.get("/is-having-tin", authMiddleware, userController.isHavingTin);

module.exports = router;
