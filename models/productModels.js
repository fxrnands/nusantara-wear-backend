const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
