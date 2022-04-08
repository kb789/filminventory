var express = require("express");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
var path = require("path");

var indexRouter = require("./routes/index");

var app = express();

// database setup

var mongoDB =
  "mongodb+srv://floweruser:Xyz123Abc@cluster0.bdd9x.mongodb.net/flower?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// set the view engine to ejs

app.set("view engine", "ejs");

// route middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

//app.use(function (err, req, res, next) {
//  if (err instanceof ValidationError) {
//    return res.status(err.statusCode).send(err.statusCode);
//  }

//return res.status(500).send(err);
//});

app.listen(3000);
console.log("Server is listening on port 3000");
