var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

/* GET users listing. */
router.post(
  "/",
  [
    check("username").isEmail(), // username must be an email
    check("password").isLength({ min: 5 }).isAlphanumeric(), // password must be at least 5 chars long
    check("dateofbirth").isISO8601() // date format'YY-MM-DD'
  ],
  function(req, res, next) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.status(200).send("accepted!");
    // res.send('respond with a resource');
  }
);

module.exports = router;
