const CustomerOrder = require("../models/CustomerOrder");

exports.createCustomerOrder = async (req, res) => {
  try {
    const customerOrder = new CustomerOrder(req.body);
    await customerOrder.save();
    res.status(201).json(customerOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllCustomerOrders = async (req, res) => {
  try {
    const customerOrders = await CustomerOrder.find();
    res.json(customerOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCustomerOrderById = async (req, res) => {
  try {
    const customerOrder = await CustomerOrder.findById(req.params.id);
    if (!customerOrder)
      return res.status(404).json({ message: "Customer Order not found" });
    res.json(customerOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
