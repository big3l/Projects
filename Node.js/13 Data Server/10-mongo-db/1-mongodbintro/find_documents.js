const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const url = "mongodb://localhost:27017/";

// findOne : find the first item in the collection
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var mydb = db.db("mydb");
  mydb.collection("customers").findOne({}, (err, result) => {
    if (err) throw err;
    console.log(result.name);
    console.log(result.address);
    db.close();
  });
});

// find : find all the items in the collection
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var mydb = db.db("mydb");
  mydb
    .collection("customers")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});

// Query : find a specific item
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var mydb = db.db("mydb");
  var query = { name: "Zalando" };
  mydb
    .collection("customers")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
