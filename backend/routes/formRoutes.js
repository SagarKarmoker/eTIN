const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");
const authMiddleware = require("../middlewares/authMiddleware");

//router.post("/finalsubmission", authMiddleware, formController.finalSubmission);
router.post("/finalsubmission", formController.finalSubmission);
// router.get("/user-tin-records", authMiddleware, formController.getTinRecords);
router.get("/user-tin-records", formController.getTinRecords);
// my-tin route
router.get("/my-tin", authMiddleware, formController.getMyTin);

//PUT
router.put("/update-tin", authMiddleware, formController.updateTin);

module.exports = router;
