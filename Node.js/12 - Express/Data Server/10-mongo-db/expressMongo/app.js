const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const express = require("express");
const app = express();
app.listen("3000", () => {
  console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
  res.send("<h2> Welcome to the homepage</h2>");
});

const url = "mongodb://localhost:27017/";

// Create DB
app.get("/create-db", (req, res) => {
  let mongodb = "create database mongoExpress"; // this will create the database with name DansDB
  db.query(mongodb, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created......");
  });
});

const db = MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let mydb = db.db("newdb");
  let myobj = {
    name: "Google",
    address: "Silicon Valley",
    value: 120978724520
  };
  mydb.collection("customers").insertOne(myobj, (err, res) => {
    if (err) throw err;
    console.log("1st document inserted!");
    db.close();
  });
});

// create table inside the DB
app.get("/createmongotabtable", (req, res) => {
  let mongodb =
    "CREATE TABLE mongotab (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR (255), PRIMARY KEY(id))";
  db.query(mongodb, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table for mongotab created...");
  });
});
