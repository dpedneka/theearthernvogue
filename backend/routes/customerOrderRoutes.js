// customerOrderRoutes.js
const express = require("express");
const CustomerOrder = require("../models/CustomerOrder");
const {
  createCustomerOrder,
  getCustomerOrderById,
  getAllCustomerOrders,
} = require("../controllers/customerOrderController");
const router = express.Router();

// Create a new customer order
router.post("/", createCustomerOrder);

// Get all customer orders
router.get("/", getAllCustomerOrders);

// Get a specific customer order by ID
router.get("/:id", getCustomerOrderById);

module.exports = router;
