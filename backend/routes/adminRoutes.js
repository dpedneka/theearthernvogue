// routes/adminRoutes.js
const express = require("express");
const {
  getAllSubmissions,
  reviewSubmission,
} = require("../controllers/submissionController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/submissions", protect, authorize("admin"), getAllSubmissions);
router.post(
  "/submissions/:id/review",
  protect,
  authorize("admin"),
  reviewSubmission
);

module.exports = router;
