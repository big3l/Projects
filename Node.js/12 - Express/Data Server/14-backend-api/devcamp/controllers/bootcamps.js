const bootcamp = require("../models/Bootcamp");

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    msg: "Show all Bootcamps",
    hello: req.hello,
    info: req.info
  });
};

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Show individual Bootcamps" });
};

exports.createBootcamp = async (req, res, next) => {
  //   console.log(req.body);
  const Bootcamp = await bootcamp.create(req.body).then(data => {
    res.status(200).json({ sucess: true, msg: "Create new Bootcamps", data : Bootcamp});
  });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamps ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamps ${req.params.id}` });
};
