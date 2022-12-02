const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userapi = require("./user_route")
const port = process.env.PORT || 3000;

const app = express();

mongoose.connect(
    "mongodb+srv://hadil:esprit123@cluster0.dojr6ix.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database connected!");
    // Starting a server
    app.listen(port, process.env.ALWAYSDATA_HTTP_ID, () => {
      console.log(`App is running at ${port}`);
    });
  })
  .catch((err) => console.log(err));


  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

app.use("/user",userapi)