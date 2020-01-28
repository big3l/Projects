const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";
const express = require("express");
const app = express();
app.listen("3005", () => {
  console.log("Server started on port 3005");
});

app.get("/", (req, res) => {
  res.send("<h2> Welcome to the homepage</h2>");
});

// Create DB
app.get("/create-db", (req, res) => {
  let mongodb = "create database mongoExpress"; // this will create the database with name DansDB
  mongodb.createCollection("mongoExpress", (err, res) => {
    if (err) throw err;
    console.log(result);
    res.send("MongoExpress Database created......");
  });
});
MongoClient.connect("mongodb://localhost:27017/mongodb", (err, db) => {
  if (err) throw err;
  console.log("Database Created");
  db.close();
});

// const url = "mongodb://localhost:27017/";
// const db = MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let mydb = db.db("newdb");
//   let myobj = {
//     name: "Google",
//     address: "Silicon Valley",
//     value: 120978724520
//   };
//   mydb.collection("customers").insertOne(myobj, (err, res) => {
//     if (err) throw err;
//     console.log("1st mongoExpress document inserted!");
//     db.close();
//   });
// });

// // create table inside the DB
// app.get("/createmongotabtable", (req, res) => {
//   let mongodb =
//     "CREATE TABLE mongotab (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR (255), PRIMARY KEY(id))";
//   db.query(mongodb, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Table for mongotab created...");
//   });
// });
