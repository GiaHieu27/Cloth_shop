const express = require("express");
const router = express.Router();

const { product } = require("../controllers/Product");

router.get("/product", product);

module.exports = router;
