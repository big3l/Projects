const express = require("express");
const router = express.Router();
const create_db = require("../controllers/create_db");
const add_db = require("../controllers/add_db");
const del_db = require("../controllers/del_db");

router.get("/createdb", (req, res, next) => {
  let db_name = req.query.db;
  let collection_name = req.query.collection;
  create_db(db_name, collection_name);
  res.send("Database and collection created");
});

router.get("/adddb", (req, res, next) => {
  let db_name = req.body.db;
  let collection_name = req.body.collection;
  let data = req.body.data;
  add_db(db_name, collection_name, data);
  res.send("Item inside collection created");
});

router.get("/deldb", (req, res, next) => {
  let db_name = req.body.db;
  let collection_name = req.body.collection;
  del_db(db_name, collection_name);
  res.send("Item inside collection deleted");
});

module.exports = router;
