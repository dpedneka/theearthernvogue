const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: true,
    },
    productImage: { type: String },
    productDescription: { type: String },
    SKU: { type: String, required: true }, // Brand Initials - Category Code - Product Code - Unique ID/Variant
    productPrice: { type: Number, required: true },
    MRP: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
    size: { type: String, required: true }, // "Length, Width, Breadth
    weight: { type: String, required: true },
    // quantitySold: { type: Number, default: 0 },
    // quantityInStock: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Available", "Out of Stock"],
      required: true,
    },
  },
  { collection: "products" }
);

module.exports = mongoose.model("Product", productSchema);
