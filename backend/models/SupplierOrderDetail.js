const mongoose = require("mongoose");

const supplierOrderDetailSchema = new mongoose.Schema(
  {
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    orderPlacedOn: { type: Date },
    deliveredOn: { type: Date },
    orderStatus: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    orderCost: { type: Number },
    packagingCharges: { type: Number },
    deliveryCharges: { type: Number },
    advanceAmountPaid: { type: Number },
    // totalAmount: { type: Number }, orderCost + packaging + delivery
  },
  { collection: "supplierOrderDetails" }
);

module.exports = mongoose.model(
  "SupplierOrderDetail",
  supplierOrderDetailSchema
);
