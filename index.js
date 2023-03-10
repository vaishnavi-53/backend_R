// var express = require("express");
// const app = express();
// const port = 8080;
// //create a server object:
// app.listen(port, () => {
// console.log("starting the server");
// }); //the server object listens on port 8080

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const port = 3031;
const config = require("./config");

const postsRouter = require("./routes/posts");

app.use(logger("dev"));

const dbUrl = config.dbUrl;

var options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/posts", postsRouter);

app.listen(port, function () {
  console.log("Runnning on " + port);
});
module.exports = app;