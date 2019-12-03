var express = require('express');
var router = express.Router();

let info = {
  name: 'Dan',
  surname: 'Lewis',
  comment : 'I am a pretty butterfly'
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', info);
});

module.exports = router;