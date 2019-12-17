const express = require("express");
const mysql = require("mysql");
const app = express();

app.listen("3000", () => {
  console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
  res.send("<h2> Welcome to the homepage</h2>");
});

//connect to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "adminDan",
  password : "1234",
  database: "DansDB"
});
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected with adminDan");
});

// Create DB
app.get("/create-db", (req, res) => {
  let sql = "create database mysqlDB"; // this will create the database with name DansDB
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created......");
  });
});

// create table inside the DB
app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR (255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table for posts created...");
  });
});

// insert post 1
app.get("/addpost", (req, res) => {
  //  let post = { title: "the title one", body: "this is the body of post 1" };
  let sql =
    "insert into posts (id , title , body) VALUES (NULL,'title one ', 'body of title one')";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post with id:1 added to posts Table...");
  });
});

// insert post 2
app.get("/addpost2", (req, res) => {
  let post = { title: "the title two", body: "this is the body of post two" };
  let sql = "insert into posts set ?";
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("<h3>Post with id:2 added to posts Table...<h3>");
  });
});

//select all posts
app.get("/getposts", (req, res) => {
  let sql = "SELECT * FROM posts";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts fetched");
  });
});

//select a posts
app.get("/getposts/:id", (req, res) => {
  let sql = `select * from posts where id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Single post fetched");
  });
});

// update post
app.get("/updatepost/:id", (req, res) => {
  let newTitle = "updated title";
  let sql = `update posts set title = '${newTitle}', body= 'updated body data' where id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("<h3>Post updated</h3>");
  });
});

//delete post
app.get("/deletepost/:id", (req, res) => {
  let sql = `delete from posts where id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post Deleted....");
  });
});
