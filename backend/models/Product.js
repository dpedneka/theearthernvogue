const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
    required: true,
  },
  subCategory: { type: String, required: true },
  productDescription: { type: String },
  SKU: { type: String, required: true },
  productPrice: { type: Number, required: true },
  MRP: { type: Number, required: true },
  totalQuantity: { type: Number, required: true },
  quantitySold: { type: Number, default: 0 },
  quantityInStock: { type: Number, required: true },
  status: { type: String, enum: ["Available", "Out of Stock"], required: true },
});

module.exports = mongoose.model("Product", productSchema);
