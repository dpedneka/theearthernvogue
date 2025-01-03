const mongoose = require("mongoose");

const supplierOrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    actualQuantityReceived: { type: Number, required: true },
  },
  { collection: "supplierOrders" }
);
module.exports = mongoose.model("SupplierOrder", supplierOrderSchema);
