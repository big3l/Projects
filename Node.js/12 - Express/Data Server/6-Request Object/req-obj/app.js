var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.get("/about", (req, res) => {
  res.send("<h1>This is about page<h5>");
});

// app.get('/:userid',(req,res) => {
//     res.send(req.params)
// })
// http://localhost:3000/5

app.get("/search", (req, res) => {
  res.send(req.query);
});
//http://localhost:3000/search?keyword=learn-js&name=DCI&year=2019

// app.post('/login', (req, res) => {
//     console.log(req.body.email) // "fbw3@gmail.com"
//     console.log(req.body.password) // "code1iSmyLife"
//    })

app.get("/request", (req, res) => {
    
  res.send(`<h2>Request Page
  <h2>req.protocol = ${req.protocol}
  <h2>req.hostname = ${req.host}
  <h2>req.path = ${req.path}
  <h2>req.originalUrl = ${req.originalUrl}
  <h2>req.subdomains = ${req.subdomains}
  <h2>req.header = ${req.header('user-agent')}
  <h2>the request method = ${req.method}
  <h2>req.cookies = ${req.cookies}
`);
  

  console.log(req.protocol); // "https"
  console.log(req.hostname); // "hamburg-coders.pro"
  console.log(req.path); // "/weather"
  console.log(req.originalUrl); // "/weather?filter=very-cold"
  console.log(req.subdomains); // "['node']"
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
