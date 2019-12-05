const  express  =  require('express'); 
const  router  =  express.Router(); 
const  low  =  require('lowdb'); 
const  FileSync  =  require('lowdb/adapters/FileSync'); 
const  adapter  =  new  FileSync('data/data.json');
const  db  =  low(adapter);

let list = db.get("list");

router.get("/", (req,res,next) => {
    // res.send("This  the data page");
    res.json(list);
}) 

router.post('/post', function(req, res, next) {
    let id = parseInt(req.body.id);
    let name = req.body.name

    db.get('list').push({
        id:id,
        name:name
    })
    .write()

    res.redirect('/')

});

router.post("/delete", (req, res, next) => {
    let id = parseInt(req.body.id);
    console.log(id);
  
    db.get("list")
      .remove({ id: id })
      .write();
    res.status(200).send(`You have removed item ${id}`);
  });


module.exports = router;