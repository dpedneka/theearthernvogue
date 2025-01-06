// supplierRoutes.js
const express = require("express");
const {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplierById,
  deleteSupplierById,
} = require("../controllers/supplierController");
const router = express.Router();

// Create a new supplier
router.post("/", createSupplier);

// Get all suppliers
router.get("/", getAllSuppliers);

// Get a specific supplier by ID
router.get("/:id", getSupplierById);

// Update Supplier By ID
router.post("/update/:id", updateSupplierById);

// Delete Supplier By ID
router.post("/delete/:id", deleteSupplierById);

module.exports = router;
