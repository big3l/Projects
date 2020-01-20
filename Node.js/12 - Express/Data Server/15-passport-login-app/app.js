const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const ExpressValidator = require("express-validator");
const ejs = require("ejs");
const colors = require("colors");
const app = express();

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("view engine", "ejs");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
connectDB();

// Body parser for Posting Data
app.use(express.urlencoded({ extended: true }));

// Connect Flash
app.use(flash());

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_message = req.flash("error_msg");
  // res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5005;
const server = app.listen(
  PORT,
  console.log("Server started on port 5005".rainbow)
);
console.log(
  `Server Started on Port ${PORT} in ${process.env.NODE_ENV} mode`.magenta
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
