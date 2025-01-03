const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    productCategoryId: { type: String, required: true, unique: true },
    productCategory: { type: String, required: true },
    productSubCategory: { type: String, required: true },
    productDescription: { type: String },
  },
  { collection: "productCategories" }
); // Specify the collection name explicitly

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategory;
