var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiRouter = require("./routes/api");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//using manual cors....
const setCors = require("./middleware/secure");
app.use(setCors);

// // using cors....
// const cors = require("cors");
// const corsfunc = require("./middleware/corsfunc");
// app.use(corsfunc);
// app.use(
//   cors({
//     origin: "*",
//     methods: "http://localhost:3000/cors"
//   })
// );

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);

module.exports = app;
