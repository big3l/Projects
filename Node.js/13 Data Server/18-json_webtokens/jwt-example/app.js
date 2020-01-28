const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome Json Web Token"
  });
});

app.post("/api/test", (req, res) => {
  console.log(req.headers);
  res.send(req.body);
});

app.post("/api/posts", verifyToken, (req, res) => {
    console.log(req.headers)
  jwt.verify(req.token, "secretKey shhhh!", (err, authData) => {
    if (err) {
      res.status(403).send(err);
    } else {
      res.json({
        message: "Data created....."
      });
    }
  });
});

const user = {
  id: 1234,
  username: "Bingo bongo",
  email: "bingo@bongo.com"
};

app.post("/api/login", (req, res) => {
  // create the token
  jwt.sign({ user }, "secretKey shhhh!", (err, token) => {
    res.json({
      token
    });
  });
});

// verify the token
function verifyToken(req, res, next) {
  // get the header value
  const headerInfo = req.headers["authorization"];
  console.log(headerInfo);
  if (typeof headerInfo !== "undefined") {
    const info = headerInfo.split(" ");
    req.token = info[1];
    next();
  } else {
    res.status(403).json({
      message: "you can not post"
    });
  }
}

app.listen(6001, () => {
  console.log("Server Started on Port 6001");
});
