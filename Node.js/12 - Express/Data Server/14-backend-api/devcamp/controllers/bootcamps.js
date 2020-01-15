const Bootcamp = require("../models/Bootcamp");

// get all the bootcamps without id
exports.getBootcamps = async (req, res, next) => {
  // res.status(200).json({
  //   sucess: true,
  //   msg: "Show all Bootcamps",
  //   hello: req.hello,
  //   info: req.info
  // });
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

// get a single bootcamp using id
exports.getBootcamp = async (req, res, next) => {
  // res
  //   .status(200)
  //   .json({ sucess: true, msg: `Show individual Bootcamps ${req.params.id}` });
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if(!bootcamp) {
      return res.status(400).json({sucess:false});
    }
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    // .then(data => {
    res.status(200).json({ sucess: true, data: bootcamp });
    // });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: err });
    console.log(req.body);
  }
};

exports.updateBootcamp = async (req, res, next) => {
  // res
  //   .status(200)
  //   .json({ sucess: true, msg: `Update bootcamps ${req.params.id}` });
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body,{
      new:true, runValidators:true
    })
    if(!bootcamp){
      res.status(400).son({sucess:false})
    }
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

exports.deleteBootcamp = async (req, res, next) => {
  // res
  //   .status(200)
  //   .json({ sucess: true, msg: `Delete bootcamps ${req.params.id}` });
  try {
    const bootcamp = await Bootcamp.deleteOne(req.params.id);
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};
   