const SupplierOrderDetail = require("../models/SupplierOrderDetail");

exports.createSupplierOrderDetail = async (req, res) => {
  try {
    const supplierOrderDetails = new SupplierOrderDetail(req.body);
    await supplierOrderDetails.save();
    res.status(201).json(supplierOrderDetails);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSuppliersOrderDetails = async (req, res) => {
  try {
    const supplierOrderDetails = await SupplierOrderDetail.find().populate(
      "supplier"
    );

    res.json(supplierOrderDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSupplierOrderDetailById = async (req, res) => {
  try {
    const supplierOrderDetails = await SupplierOrderDetail.findById(
      req.params.id
    ).populate("supplier");
    if (!supplierOrderDetails)
      return res.status(404).json({ message: "Supplier not found" });
    res.json(supplierOrderDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSupplierOrderDetailById = async (req, res) => {
  try {
    const supplierOrderDetails = await SupplierOrderDetail.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(supplierOrderDetails);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteSupplierOrderDetailById = async (req, res) => {
  try {
    await SupplierOrderDetail.findByIdAndDelete(req.params.id);
    res.status(204).send("deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};
