const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = new Product(product);
    newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.allProducts = async (req, res) => {
  console.log("Product API");
};

exports.product = async (req, res) => {
  console.log("Product API");
};
