const express = require("express");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const { notFound, errorHandler } = require("./middleware/error");
const connectDb = require("./config");
connectDb(process.env.DB);

const app = express();
app.use(express.json());
// app.use(notFound);
// app.use(errorHandler);
// route
readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
