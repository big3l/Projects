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

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Created Bootcamps" });
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
