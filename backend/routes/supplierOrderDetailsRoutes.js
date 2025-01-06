// supplierRoutes.js
const express = require("express");
const {
  createSupplierOrderDetail,
  getAllSuppliersOrderDetails,
  getSupplierOrderDetailById,
  updateSupplierOrderDetailById,
  deleteSupplierOrderDetailById,
} = require("../controllers/supplierOrderDetailsController");
const router = express.Router();

// Create a new supplier
router.post("/", createSupplierOrderDetail);

// Get all suppliers
router.get("/", getAllSuppliersOrderDetails);

// Get a specific supplier by ID
router.get("/:id", getSupplierOrderDetailById);

// Update Supplier Order Detail By ID
router.post("/update/:id", updateSupplierOrderDetailById);

// Delete Supplier Order Detail By ID
router.post("/delete/:id", deleteSupplierOrderDetailById);

module.exports = router;
