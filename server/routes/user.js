const express = require("express");
const router = express.Router();

const { user } = require("../controllers/User");

router.post("/user", user);

module.exports = router;
