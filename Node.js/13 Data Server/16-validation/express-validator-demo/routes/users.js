var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

/* GET users listing. */
router.post(
  "/",
  [
    check("username").isEmail(), // username must be an email
    check("password")
      .isLength({ min: 5 })
      .isAlphanumeric(), // password must be at least 5 chars long
    check("dateofbirth").isISO8601(), // date format'YY-MM-DD'
    check("age").isInt({ min: 18, max: 55 }), // aged between 18 & 55
    check("mobile").isMobilePhone("de-DE"), // mobile format is german
    check("plz").isPostalCode("DE"), // german postcode
    check("card").isCreditCard(),
    check("price").isCurrency({ symbol: "€" }),
    check("ip").isIP(),
    check("url").isURL(),
    check("text")
      .trim()
      .not()
      .isEmpty()
      .withMessage("rejected because its empty"),
    check("email")
      .trim()
      .normalizeEmail()
      .isEmail()
  ],
  function(req, res, next) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.status(200).json({ req: req.body });
    // res.send('respond with a resource');
  });

module.exports = router;
