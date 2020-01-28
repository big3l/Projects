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
