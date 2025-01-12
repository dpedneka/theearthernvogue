const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const updateData = { ...req.body };

  if (req.file) {
    updateData.productImage = `/${req.file.key}`;
  }
  try {
    const product = new Product(updateData);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("supplier")
      .populate("category");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("supplier")
      .populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProductById = async (req, res) => {
  const { productName } = req.body;
  const updateData = { ...req.body };

  if (req.file) {
    updateData.productImage = `/${req.file.key}`;
  }
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send("deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};
