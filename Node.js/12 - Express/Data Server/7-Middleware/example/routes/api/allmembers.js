const express = require("express");
const router = express.Router();
const members = require("../../members");

//get all the members
router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
  // some is similar to filter but gives true or false
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(item => item.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No members with ID number ${req.params.id}` });
  }
});
module.exports = router;

// get the selected member by id
// app.get("/api/members/:id", (req, res) => {
//   let found = members.filter(item => {
//     if (item.id == req.params.id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   res.json(found);
//   res.send("Not an ID, search");
// })
