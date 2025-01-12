const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");

const {
  addProductCategory,
  getProductCategories,
  getProductCategoryById,
  updateProductCategory,
  deleteProductCategory,
} = require("../controllers/productCategoryController");
const upload = require("../middleware/awsUploadMiddleware");

// Create a product category
// router.post("/", addProductCategory);

router.post("/", protect, authorize("admin"), addProductCategory);

// Get all product categories
router.get("/", getProductCategories);
router.get("/:id", getProductCategoryById);

// Update a product category
router.post("/update/:id", updateProductCategory);

// Delete a product category
router.post("/delete/:id", deleteProductCategory);

module.exports = router;
