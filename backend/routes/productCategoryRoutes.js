const express = require("express");
const router = express.Router();

const {
  addProductCategory,
  getProductCategories,
  updateProductCategory,
  deleteProductCategory,
} = require("../controllers/productCategoryController");

// Create a product category
router.post("/", addProductCategory);

// Get all product categories
router.get("/", getProductCategories);

// Update a product category
router.post("/update/:id", updateProductCategory);

// Delete a product category
router.post("/delete/:id", deleteProductCategory);

module.exports = router;
