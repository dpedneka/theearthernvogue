const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    productCategory: { type: String, required: true },
    productCatDesc: { type: String },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "ProductCategory" },
  },
  { collection: "productCategories" }
); // Specify the collection name explicitly

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategory;
