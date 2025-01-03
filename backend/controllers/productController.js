const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("supplierId")
      .populate("categoryId");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
