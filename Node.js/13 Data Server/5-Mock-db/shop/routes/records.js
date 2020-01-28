var express = require("express");
var router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("data/db.json");
const db = low(adapter);
let data = db.get("records");

db.defaults({
  records: [
    {
      id: 0,
      title:
        "Samsung Galaxy S10+ Smartphone (16,35 cm/6,4 Zoll, 512 GB Speicherplatz, 12 MP Kamera)",
      price: 899.99,
      color: "Purple"
    },
    {
      id: 1,
      title: "Apple iPhone",
      price: 135.0,
      color: "green"
    }
  ],
  count: 2
}).write();

/* GET records listing. */
router.get("/", function(req, res, next) {
  // res.send("This is the records page");
  res.status(200).send(data);
});

/* GET particular record using id */
router.get("/:id", (req, res) => {
  //filtering
  let item = data.filter(item => {
    // return item.id == req.params.id;
    if (item.id == req.params.id) {
      return true;
    }
  });
  res.status(200).send(item);
  res.end(item.id);
});

// Post a new record
router.post("/", (req, res) => {
  let title = req.body.title;
  let price = req.body.price;
  let color = req.body.color;

  //check if any item with title and price exists...

  // data.forEach(item => {
  //   if (item.title == req.params.title && item.price == req.params.price) {
  //     res.status(404).send("This is a duplicate \n");
  //   } else {

  // Get array of titles
  let array_titles = db
    .get("records")
    .map("title")
    .value();

  let duplicated = false;

  // Check that the new title is not a duplicate
  array_titles.forEach(item => {
    if (item === title) {
      duplicated = true;
    }
  });
  if (duplicated === false) {
    console.log(title);
    console.log(price);
    console.log(color);

    // Dynamic id increments
    let newid = data.__wrapped__.records.length;
    console.log(newid);

    let count = db.get("count");

    db.get("records")
      .push({
        id: count,
        title: title,
        price: price,
        color: color
      })
      .write();
    res.status(200).send("database has been updated\n");

    // Dynamic increment count
    db.update("count", n => n + 1).write();
  } else {
    res.status(404).send("This is a duplicate \n");
  }
});

// deleting an item.
router.post("/delete", (req, res) => {
  let id = parseInt(req.body.id);
  console.log(id);

  db.get("records")
    .remove({ id: id })
    .write();
  res.status(200).send(`You have removed item ${id}`);
});

module.exports = router;


// problem - when item is removed, counter is not adjusted.