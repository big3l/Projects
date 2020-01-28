const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Load User Model
const User = require("../models/User");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match User in mongo DB
      User.findOne({ email: email })
        .then(userData => {
          if (!userData) {
            return done(null, false, { message: "This email is not registered" });
          }
          // Match Password
          bcrypt.compare(password, userData.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, userData);
            }
            return done(null, false, { message: "Incorrect Password" });
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
  );
  passport.serializeUser((user, done) =>{
    done(null, user.id);
  });
  passport.deserializeUser((id, done)=> {
    User.findById(id, (err, user) =>{
      done(err, user);
    });
  });
};
