var express = require("express");
var router = express.Router();

let users = 
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  } 


/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("users", users);
});

module.exports = router;
