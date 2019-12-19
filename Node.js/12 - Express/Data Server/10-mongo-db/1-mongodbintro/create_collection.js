const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const url = "mongodb://localhost:27017/";

// create a collection called customers
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var mydb = db.db("mydb");
  mydb.createCollection("customers", (err, res) => {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

// insert google, facebook and amazon into customers collection
MongoClient.connect(url, (err, db) => {
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

  let myobj2 = {
    name: "Facebook",
    address: "Locks Heath",
    value: 124637322235335
  };
  mydb.collection("customers").insertOne(myobj2, (err, res) => {
    if (err) throw err;
    console.log("2nd document inserted!");
    db.close();
  });

  let myobj3 = { name: "Amazon", address: "Brazil", value: 5000000000 };
  mydb.collection("customers").insertOne(myobj3, (err, res) => {
    if (err) throw err;
    console.log("3rd document inserted!");
    db.close();
  });

  let myobj4 = { name: "Zalando", address: "Hamburg", value: 7543854368 };
  mydb.collection("customers").insertOne(myobj4, (err, res) => {
    if (err) throw err;
    console.log("4th document inserted!");
    db.close();
  });
});
