const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const ExpressValidator = require("express-validator");
// const expressLayouts = require("ejs");
const colors = require("colors");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
connectDB();

const app = express();

// EJS View Engine
app.set("view engine", "ejs");

// Body parser for Posting Data
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(session({
    secret : 'secret',
    resave: true,
    saveUninitialized : true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global variables
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_message = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
const index = require('./routes/index');
const users = require('./routes/users')
app.use('/', index);
app.use('/users', users);

const PORT = process.env.PORT || 5005;
const server = app.listen(PORT, console.log("Server started on port 5005"));
console.log(
  `Server Started on Port ${PORT} in ${process.env.NODE_ENV} mode`.magenta
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});