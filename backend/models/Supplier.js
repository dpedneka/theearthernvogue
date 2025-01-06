const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: { type: String, required: true },
  contactName: { type: String },
  address: { type: String },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String },
});

module.exports = mongoose.model("Supplier", supplierSchema);
