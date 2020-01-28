const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

// Sort : sort by file name - { name: 1 } ascending & { name: -1 } descending
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var mydb = db.db("mydb");
  var mysort = { name: -1 };
  mydb
    .collection("customers")
    .find()
    .sort(mysort)
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
