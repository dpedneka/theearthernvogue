const Supplier = require("../models/Supplier");

exports.createSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).json(supplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier)
      return res.status(404).json({ message: "Supplier not found" });
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(supplier);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteSupplierById = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.status(204).send("deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};
