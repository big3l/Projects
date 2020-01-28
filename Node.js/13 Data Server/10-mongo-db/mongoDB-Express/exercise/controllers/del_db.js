const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

function del_db(db_name, collection_name) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    let mydb = db.db(db_name);
    let myquery = { name: "Daniel" };
    mydb.collection(collection_name).deleteOne(myquery, (err, res) => {
      if (err) throw err;
      console.log("1st document deleted!");
      db.close();
    });
  });
}
module.exports = del_db;
