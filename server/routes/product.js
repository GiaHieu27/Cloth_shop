const express = require("express");
const router = express.Router();

const { addProduct, allProducts, product } = require("../controllers/Product");

router.post("/addProduct", addProduct);
router.get("/allProducts/", allProducts);
router.get("/product/:slug", product);

module.exports = router;
