const express = require("express");
const router = express.Router();
const members = require("../../members");
const uuid = require("uuid");

//get all the members
router.get("/", (req, res) => {
  res.send(members);
});

// get the selected member by id
router.get("/:id", (req, res) => {
  // some is similar to filter but gives true or false
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(item => item.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No members with ID number ${req.params.id}` });
  }
});

//create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: req.body.status
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }
  members.push(newMember);
  res.json(members);
});

// update a member to file
router.put("/:id", (req, res) => {
  const found = members.some(item => item.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;
        member.status = updMember.status ? updMember.status : member.status;
        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).send({ msg: `No members with ID number ${req.params.id}` });
  }
});

// delete a member
router.delete("/:id", (req, res) => {
  const found = members.some(item => item.id == req.params.id);
  if (found) {
    members.forEach((CheckUser, index) => {
      if (CheckUser.id === parseInt(req.params.id)) {
        members.splice(index, 1);
        res.status(200).json({ msg: "Member deleted", members });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;

// delete a member
// router.delete("/:id", (req, res) => {
//   const found = members.some(item => item.id == req.params.id);
//   if (found) {
//     res.json({
//       msg: "Member deleted",
//       members: members.filter(member => {
//         if (member.id != req.params.id) {
//           return member;
//         }
//       })
//     });
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//   }
// });

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
