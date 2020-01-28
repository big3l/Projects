var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// Set error message
router.get("/broken", function(req, res, next) {
  throw new Error("Hey Dan something went wrong!");
});

// Sets error message, includes the requester's ip address!
router.get("/forbidden", function(req, res, next) {
  let err = new Error(
    `You tried to access /Forbidden, your IP address = ${req.ip}`
  );
  err.statusCode = 403;
  next(err.message);
});

router.get("/download", function(req, res, next) {
  fs.readFile("/something.txt", "UTF-8", function(err, data) {
    if (err) {
      next(err); // Pass errors to Express with middlware function
    } else {
      res.send(data);
    }
  });
});

// Create own route with custom message in txt file (a-syncronous)
router.get("/upload", function(req, res, next) {
  let file = req.query.file; //localhost:3000/upload?file=mydata.txt
  fs.readFile(__dirname + "/../data/" + file, "UTF-8", function(err, data) {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

// try & catch block
//http://localhost:3000/divide?x=2&y=0
router.get("/divide", function(req, res, next) {
  try {
    x = parseFloat(req.query.x);
    y = parseFloat(req.query.y);
    if (y == 0) {
      throw new Error("You trying to divide by zero");
    } else {
      res.send(String(x / y));
    }
  } catch (err) {
    next(err.message);
  }
});

// Promise is a modern way to handle errors
router.get("/multiply", function(req, res, next) {
  Promise.resolve()
    .then(function() {
      x = parseFloat(req.query.x);
      y = parseFloat(req.query.y);
      if (y == 0) {
        throw new Error("You trying to multiply by zero");
      } else if (isNaN(x) || isNaN(y)) {
        throw new Error("Cannot of convert string to integer, NaN");
      } else if (typeof x == "undefined" || typeof y == "undefined") {
        throw new Error("X or Y is undefined, sort it out!");
      } else {
        res.send(String(x * y));
      }
    })
    .catch(next);
});

// // another version of above
// router.get("/multiply", function(req, res, next) {
//   Promise.resolve()
//     .then(function() {
//       if (req.query.y == 0 || req.query.x == 0) {
//         throw new Error("you are multiply by 0");
//       } else if (
//         typeof req.query.y == "undefined" ||
//         typeof req.query.x == "undefined"
//       ) {
//         throw new Error("please put a number");
//       } else if (typeof req.query.y != "NaN" || typeof req.query.x != "NaN") {
//         throw new Error(
//           "please dont write a letters!, Connot convert string to integer"
//         );
//       } else {
//         let sum = parseInt(req.query.x) * parseInt(req.query.y);
//         res.send(String(sum));
//       }
//     })
//     .catch(next);
// });

module.exports = router;
