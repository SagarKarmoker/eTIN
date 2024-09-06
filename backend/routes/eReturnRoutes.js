const express = require("express");
const router = express.Router();
const eReturnController = require("../controllers/eReturnController");
const authMiddleware = require("../middlewares/authMiddleware");

// GET


// POST
router.post("/submit-singlepage-return", authMiddleware, eReturnController.singlePageReturn);
router.post("/is-return-submitted", authMiddleware, eReturnController.isReturnSubmitted);

//optional
router.post("/agree-singlepage-return", authMiddleware, eReturnController.agreeSinglePageReturn);


module.exports = router;
