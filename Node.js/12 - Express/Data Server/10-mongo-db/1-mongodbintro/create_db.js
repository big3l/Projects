const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

// create database
MongoClient.connect("mongodb://localhost:27017/mongodb", (err, db) => {
  if (err) throw err;
  console.log("Database Created");
  db.close();
});
