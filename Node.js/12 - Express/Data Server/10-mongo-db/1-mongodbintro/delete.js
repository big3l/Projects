const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

// Delete : Use 'deleteOne' and 'deleteMany'
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   var mydb = db.db("mydb");
//   var myquery = { name: "Facebook" };
//   mydb.collection("customers").deleteOne(myquery, (err, obj) => {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

// Delete Many : delete all items with the same value 'name'
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var mydb = db.db("mydb");
  var myquery = { name: "Google" };
  mydb.collection("customers").deleteMany(myquery, (err, obj) => {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
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
