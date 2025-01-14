const {
  addProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
  getProductById,
  getProductByProductName,
} = require("../controllers/productController");
const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const upload = require("../middleware/awsUploadMiddleware");

router.post(
  "/",
  protect,
  authorize("admin"),
  upload.single("image"),
  addProduct
);

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/details/:productName", getProductByProductName);

// Update Product By ID
router.post(
  "/update/:id",
  protect,
  authorize("admin"),
  upload.single("image"),
  updateProductById
);

// Delete Product By ID
router.post("/delete/:id", deleteProductById);

module.exports = router;
