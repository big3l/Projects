const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/data.json");
const db = low(adapter);

let list = db.get("list");

router.get("/", (req, res, next) => {
  // res.send("This  the data page");
  res.json(list);
});

router.post("/post", function(req, res, next) {
  let id = parseInt(req.body.id);
  let name = req.body.name;

  db.get("list")
    .push({
      id: id,
      name: name
    })
    .write();

  res.redirect("/");
});

router.post("/delete", (req, res, next) => {
  let id = parseInt(req.body.id);
  console.log(id);

  db.get("list")
    .remove({ id: id })
    .write();
  res.status(200).send(`You have removed item ${id}`);
});

// update a name
router.put("/:id", (req, res) => {
  const found = list.some(item => item.id === parseInt(req.params.id));
  if (found) {
    const updList = req.body.id;
    list.forEach(name => {
      if (name.id === parseInt(req.params.id)) {
        name.name = updList.name ? updList.name : name.name;
        name.email = updList.email ? updList.email : name.email;
        name.username = updList.username ? updList.username : name.username;
        res.json({ msg: "Name updated", name });
      }
    });
  } else {
    res.status(400).send({ msg: `No names with ID number ${req.params.id}` });
  }
});

// delete a name
router.delete("/:id", (req, res) => {
  const found = list.some(item => item.id == req.params.id);
  if (found) {
    list.forEach((name, index) => {
      if (name.id === parseInt(req.params.id)) {
        list.splice(index, 1);
        res.status(200).json({ msg: "Name deleted", list });
      }
    });
  } else {
    res.status(400).json({ msg: `No name with the id of ${req.params.id}` });
  }
});

module.exports = router;
