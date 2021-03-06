const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { body, check, validationResult } = require("express-validator");

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

// Handle Registration (new version using express validator library)
const verifyPasswordsMatch = (req, res, next) => {
  const { password2 } = req.body;
  return check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 charachters long")
    .equals(password2);
  // .withMessage("Passwords do not match");
};

router.post(
  "/register",
  [
    check("name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Name is empty"),
    check("email")
      .trim()
      // .normalizeEmail()
      .isEmail()
      .withMessage("email is not valid"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password is too short"),
    // custom validation
    body("password").custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error("Passwords do not match!");
      }
      // Indicates the success of this synchronous custom validator
      return true;
    })
  ],
  (req, res) => {
    const { name, email, password, password2 } = req.body;
    console.log(req.body);
    // if there are errors
    const check_errors = validationResult(req);
    let errors = [];
    if (!check_errors.isEmpty()) {
      // return res.status(422).json({ errors: errors() });
      console.log(check_errors.array());
      // errors.push(check_errors.array());
      check_errors.array().forEach((item) => {
        errors.push(item);
      });
      console.log("errors :", errors);
      if (errors.length > 0) {
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      }
    } else {
      // validation passed
      User.findOne({ email: email }).then(data => {
        if (data) {
          // we found the email in our database
          errors.push({ msg: "Email is already registered" });
          res.render("register", { errors, name, email, password, password2 });
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
  }
);

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
