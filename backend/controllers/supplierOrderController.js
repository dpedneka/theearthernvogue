const SupplierOrder = require("../models/SupplierOrder");

exports.addSupplierOrder = async (req, res) => {
  try {
    const supplierOrder = new SupplierOrder(req.body);
    await supplierOrder.save();
    res.status(201).json(supplierOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSupplierOrders = async (req, res) => {
  try {
    const supplierOrders = await SupplierOrder.find();
    res.json(supplierOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSupplierOrdersById = async (req, res) => {
  try {
    const supplierOrder = await SupplierOrder.findById(req.params.id);
    if (!supplierOrder)
      return res.status(404).json({ message: "Order not found" });
    res.json(supplierOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
