const Product = require("../models/productModels");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
};

module.exports = { getProducts, createProduct };
