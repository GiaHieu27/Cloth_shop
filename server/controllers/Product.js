const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const product = new Product();
    await product.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500);
  }
};
exports.allProducts = async (req, res) => {
  console.log("Product API");
};

exports.product = async (req, res) => {
  console.log("Product API");
};
