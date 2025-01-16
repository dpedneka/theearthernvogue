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

exports.getProductByProductName = async (req, res) => {
  const productName = fromSlug(req.params.productName);

  try {
    const product = await Product.findOne({
      productName: { $regex: new RegExp(`^${productName}$`, "i") },
    })
      .populate("supplier")
      .populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProductById = async (req, res) => {
  const updateData = { ...req.body };
  const imageUrls = [];
  // Upload each image to S3 and store the S3 URL
  for (const file of req.files) {
    imageUrls.push(file.key); // Push S3 URL to imageUrls array
  }

  if (req.files.length > 0) {
    updateData.productImage = imageUrls; // `/${req.file.key}`;
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

const fromSlug = (slug) => {
  // Replace hyphens with spaces and capitalize each word's first letter
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
