const ProductCategory = require("../models/ProductCategory");

exports.addProductCategory = async (req, res) => {
  try {
    console.log(req.body);
    const categories = ProductCategory.insertMany(req.body);
    // const product = new ProductCategory(req.body);
    res.status(201).send(categories);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProductCategories = async (req, res) => {
  try {
    const categories = await ProductCategory.find().populate("parent");
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProductCategoryById = async (req, res) => {
  try {
    const product = await ProductCategory.findById(req.params.id).populate(
      "parent"
    );
    if (!product)
      return res.status(404).json({ message: "Product Category not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProductCategory = async (req, res) => {
  try {
    const category = await ProductCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log(category);
    res.status(200).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProductCategory = async (req, res) => {
  try {
    await ProductCategory.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
