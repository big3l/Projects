var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// // // // Custom 404 page
// app.get("*", function(req, res, next) {
// throw new Error("The page you requested doesn't exist, try again");
// // let err = new Error("The page you requested doesn't exist, try again");
// // err.statusCode = 404;
// // //  res.status(404).send("The page you requested doesn't exist, try again");
// // //  res.status(404).sendFile(__dirname + "/public/404.html");
// next(res.message);
// });

// user defined error handler using middleware
app.get("*", function(req, res, next) {
  throw new Error("The page you requested doesn't exist, try again");
});
app.use(errorHandler);
function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({ message: err.message });
}

module.exports = app;
