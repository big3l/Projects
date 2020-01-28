const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

const app = express();
app.listen("3000", () => {
  console.log("Connected to server 3000");
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to MongoDB project Homepage<h1>");
});

// get the 1st item from the db
app.get("/mongo", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("mongo-test");
    mydb.collection("articles").findOne({}, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
});

// get the whole list of items from the db
app.get("/allmongo", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mydb = db.db("mongo-test");
    mydb
      .collection("articles")
      .find({price:{$gt:700}}) //will show items with price greater than 700
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});
