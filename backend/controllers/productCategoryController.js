const ProductCategory = require("../models/ProductCategory");

exports.addProductCategory = async (req, res) => {
  try {
    const category = new ProductCategory(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProductCategories = async (req, res) => {
  try {
    const categories = await ProductCategory.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateProductCategory = async (req, res) => {
  try {
    const category = await ProductCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
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
