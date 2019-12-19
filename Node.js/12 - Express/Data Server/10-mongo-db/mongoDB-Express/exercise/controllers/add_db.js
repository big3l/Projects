const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

function add_db(db_name, collection_name, data) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    let mydb = db.db(db_name);

    mydb.collection(collection_name).insertOne(data, (err, res) => {
      if (err) throw err;
      console.log("1st document inserted!");
      db.close();
    });
  });
}

module.exports = add_db;
