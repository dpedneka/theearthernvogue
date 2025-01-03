const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const category = new Order(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const categories = await Order.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const category = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
