const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// import User model
const User = require("../models/User");

// Login Page
router.get("/login", (req, res) => {
  res.render("login");
});

// Registration Page
router.get("/register", (req, res) => {
  res.render("register");
});

// Handle Registration
router.post("/register", (req, res) => {
  // console.log(req.body);
  // res.send('Hello from the other side')
  const { name, email, password, password2 } = req.body;
  let error = [];
  // checkin the required fields
  if (!name || !email || !password || !password2) {
    error.push({ msg: "Please complete all fields" });
  }
  // check passwords match
  if (password !== password2) {
    error.push({ msg: "Passwords do not match" });
  }
  // check password length
  if (password.length < 6) {
    error.push({ msg: "password must be at least 6 charachters long" });
  }
  if (error.length > 0) {
    res.render("register", {
      error,
      name,
      email,
      password,
      password2
    });
  } else {
    // validation passed
    User.findOne({ email: email }).then(data => {
      if (data) {
        // we found the email in our database
        error.push({ msg: "Email is already registered" });
        res.render("register", { error, name, email, password, password2 });
      } else {
        const newUser = new User({ name, email, password });
        // Hash password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            console.log("the hashed password is : " + newUser.password);
            newUser
              .save() //saved user in database
              .then(user => {
                req.flash("success_msg", "You are registered, please login.");
                res.redirect("/users/login");
              })
              .catch(err => {
                console.log(err);
              });
          });
        });
      }
    });
  }
});

// Login Handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

// Login with facebook
router.get("/auth/facebook", passport.authenticate("facebook"));
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// Logout Handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are safely logged out");
  res.redirect("/users/login");
});

module.exports = router;
