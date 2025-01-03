const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

// Create a order
router.post("/", createOrder);

// Get all orders
router.get("/", getAllOrders);

// Update Orders
router.put("/:id", updateOrder);

// Delete a Order
router.delete("/:id", deleteOrder);

module.exports = router;
