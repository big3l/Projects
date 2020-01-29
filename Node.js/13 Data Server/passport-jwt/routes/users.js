const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { body, check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const mailer = require("../config/sendEmail");
const crypto = require("crypto");
// User model
const User = require("../models/User");

// Login -Page
router.get("/login", (req, res) => {
  res.render("login");
});

// Register Page
router.get("/register", (req, res) => {
  res.render("register");
});

// Update Profile
router.post(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/users/login",
    failureFlash: true
  }),
  (req, res) => {
    console.log(req.user);
    console.log(req.body);
    const newData = {
      id: req.body.id,
      email: req.body.email,
      password: req.body.password
    };
    User.findByIdAndUpdate(req.user._id, newData);
    res.render("profile", {
      user: req.user
    });
  }
);

// Forgot Password
router.get("/forgotPassword", (req, res) => {
  res.render("forgotPassword");
});

// Reset Password
router.post("/forgotPassword", (req, res, next) => {
  // 1- get the user from the DB using email
  const email = req.body.email;
  let errors = [];
  User.findOne({ email: email }).then(data => {
    if (data) {
      console.log("Email found in out database");
      const resetToken = crypto.randomBytes(32).toString("hex");
      console.log(resetToken);
      const passwordResetToken = crypto
        .createHash("sha265")
        .update(resetToken)
        .digest("hex");
        console.log(passwordResetToken)
    } else {
      errors.push({
        msg: "Email is not registered"
      });
      res.render("forgotPassword", {
        errors,
        email
      });
    }
  });
});

// Register Handle
const verifyPasswordsMatch = (req, res, next) => {
  const { password2 } = req.body;

  return check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 4 characters")
    .equals(password2);
  // .withMessage('passwords do not match')
};

router.post(
  "/register",
  [
    // our checks here
    check("name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("name is empty"),
    check("email")
      .trim()
      .isEmail()
      .withMessage("email incorrect"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("password is to short"),
    // check('password2').equals('password').withMessage('passwords are not equal')
    // verifyPasswordsMatch,
    body("password").custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error("Password confirmation does not match password");
      }
      // Indicates the success of this synchronous custom validator
      return true;
    })
  ],
  (req, res, next) => {
    const { name, email, password, password2 } = req.body;

    console.log(req.body);
    // if there are errors ?
    const check_errors = validationResult(req);
    let errors = [];
    if (!check_errors.isEmpty()) {
      // return res.status(422).json({ errors: check_errors.array() });
      console.log(check_errors.array());
      check_errors.array().forEach(item => {
        errors.push(item);
      });
      console.log("errors : ", errors);
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
          errors.push({ msg: " Email is already registered" });
          res.render("register", {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            email,
            password
          });

          // Hash Password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;

              // set hashed password
              newUser.password = hash;
              console.log("the hashed pass is : " + newUser.password);
              // save the user data to our database
              newUser
                .save()
                .then(user => {
                  mailer(user.email);
                  req.flash(
                    "success_msg",
                    "You are registered and you can login"
                  );

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

// profile
router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/users/login",
    failureFlash: true
  }),
  (req, res) => {
    console.log(req.user);
    res.render("profile", {
      user: req.user
    });
  }
  // user.findOne()
);

// login Handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/users/callback",
    failureRedirect: "/users/login",
    failureFlash: true
  })(req, res, next);
});

router.get("/callback", (req, res, next) => {
  let token = jwt.sign({ id: req.user.email }, process.env.JWT_SECRET);
  console.log("token:", token);
  res
    .status(200)
    .cookie("jwt", token, { httpOnly: true })
    .redirect("/dashboard");
});

// logout Handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out ");
  res.redirect("/users/login");
});

//Login with Facebook
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/users/callback",
    failureRedirect: "/users/register",
    failureFlash: true
  })
);

// Login with GitHub
router.get("/auth/github", passport.authenticate("github", { scope: "email" }));

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/users/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/users/callback");
  }
);

// Login with Google
// router.get("/auth/google", passport.authenticate("google", { scope: "email" }));

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/users/login" }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/users/callback");
//   }
// );

module.exports = router;
