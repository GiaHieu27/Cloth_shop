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
  try {
    const allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.product = async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await Product.findOne({ slug: slug });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
