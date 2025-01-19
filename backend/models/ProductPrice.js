const mongoose = require("mongoose");

const productPriceSchema = new mongoose.Schema(
  {
    price: { type: String, required: true },
    mrp: { type: String, required: true },
    category: { type: String },
  },
  { collection: "productCategories" }
); // Specify the collection name explicitly

const ProductPrice = mongoose.model("ProductPrice", productPriceSchema);

module.exports = ProductPrice;
