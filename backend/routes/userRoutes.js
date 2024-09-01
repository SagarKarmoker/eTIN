const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// POST
router.post("/change-contact", authMiddleware, userController.changeContact);
router.post("/generate-ticket", authMiddleware, userController.generateTicket);

// GET
router.get("/is-having-tin", authMiddleware, userController.isHavingTin);
router.get("/get-ticket-status", authMiddleware, userController.getTicketStatus);

module.exports = router;
