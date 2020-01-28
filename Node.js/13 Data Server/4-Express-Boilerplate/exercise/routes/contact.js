var express = require("express");
var router = express.Router();

let data = {
  email: "dan.lewis@gmail.com",
  address: "Hartungstraße",
  phone: "07876785540"
};

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("contact", data);
});

module.exports = router;
