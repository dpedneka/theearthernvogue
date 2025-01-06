const mongoose = require("mongoose");

const supplierOrderSchema = new mongoose.Schema(
  {
    supplierOrderDetail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SupplierOrderDetail",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    // totalPrice: { type: Number, required: true }, // Quantity * Price
    actualQuantityReceived: { type: Number, required: true }, // Actual Amount of Quantity received as opposed to ordered
    damagedQuantity: { type: Number, required: true }, // Damaged Quantity after ordered
  },
  { collection: "supplierOrders" }
);
module.exports = mongoose.model("SupplierOrder", supplierOrderSchema);
