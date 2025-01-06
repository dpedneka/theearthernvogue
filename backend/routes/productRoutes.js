const {
  addProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");
const express = require("express");
const router = express.Router();

router.post("/", addProduct);

router.get("/", getAllProducts);

// Update Product By ID
router.post("/update/:id", updateProductById);

// Delete Product By ID
router.post("/delete/:id", deleteProductById);

module.exports = router;
