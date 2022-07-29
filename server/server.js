const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const connectDb = require("./config");
connectDb(process.env.DB);

app.get("/", (req, res) => {
  res.send("E-commerce website server");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
