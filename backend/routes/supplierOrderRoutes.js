// supplierOrderRoutes.js
const express = require("express");
const {
  addSupplierOrder,
  getSupplierOrders,
  getSupplierOrdersById,
} = require("../controllers/supplierOrderController");
const router = express.Router();

// Create a new supplier order
router.post("/", addSupplierOrder);

// Get all supplier orders
router.get("/", getSupplierOrders);

// Get a specific supplier order by ID
router.get("/:id", getSupplierOrdersById);

module.exports = router;
