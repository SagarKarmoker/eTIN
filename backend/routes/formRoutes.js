const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");
const authMiddleware = require("../middlewares/authMiddleware");

// POST
router.post("/finalsubmission", formController.finalSubmission);

// GET
router.get("/user-tin-records", formController.getTinRecords);
router.get("/my-tin", authMiddleware, formController.getMyTin);
router.get("/get-request-status", authMiddleware, formController.getRequestStatus);

//PUT
router.put("/update-tin", authMiddleware,    formController.updateTin);

module.exports = router;
