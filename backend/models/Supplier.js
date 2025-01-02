const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierName: { type: String, required: true },
  contactName: { type: String },
  address: { type: String },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String },
  deliveryPlacedDate: { type: Date },
  deliveryDate: { type: Date },
  deliveryStatus: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
  orderCost: { type: Number },
  packagingCharges: { type: Number },
  deliveryCharges: { type: Number },
  totalPayment: { type: Number },
  advancedPayment: { type: Number },
  pendingPayment: { type: Number },
});

module.exports = mongoose.model("Supplier", supplierSchema);
