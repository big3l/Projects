const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

//  Drop collection : delete the whole collection
MongoClient.connect(url, (err, db) =>{
  if (err) throw err;
  var mydb = db.db("mydb");
  mydb.collection("customers").drop((err, delOK) =>{
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});