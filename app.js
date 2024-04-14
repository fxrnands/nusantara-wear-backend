const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dbConnect = require("./config/dbConnect");
require("dotenv/config");

//! CONST API URL
const api = process.env.API_URL;
const port = process.env.PORT;

//! MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//! ROUTER IMPORT
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");

dbConnect.on("error", function (err) {
  console.log(`connection error: ${err}`);
});

dbConnect.on("open", function () {
  //! ROUTER
  app.use(`${api}/auth`, authRouter);
  app.use(`${api}/product`, productRouter);

  app.listen(port);
  console.log("database connected successfully");
});
