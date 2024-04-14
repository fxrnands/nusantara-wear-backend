const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
} = require("../controller/productController");

router.get("/get-all", getProducts);
router.post("/create", createProduct);

module.exports = router;
