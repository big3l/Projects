const moment = require("moment");

//our middleware
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}
      ${req.originalUrl}:${moment().format()}`
  );
  next();
};
//   app.use(logger);

module.exports = logger;
