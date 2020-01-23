var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Registration Page
router.get("/register", (req, res) => {
  res.render("registration",{title: 'Registration Form'});
});

// Registration Page
router.get("/review", (req, res) => {
  res.render("review",{title: 'Review Form'});
});

// Login Page
router.get('/login',(req,res) => {
  res.render("login", {title: 'Login Form'})
})

module.exports = router;