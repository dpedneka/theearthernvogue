// supplierRoutes.js
const express = require("express");
const {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
} = require("../controllers/supplierController");
const router = express.Router();

// Create a new supplier
router.post("/", createSupplier);

// Get all suppliers
router.get("/", getAllSuppliers);

// Get a specific supplier by ID
router.get("/:id", getSupplierById);

module.exports = router;
