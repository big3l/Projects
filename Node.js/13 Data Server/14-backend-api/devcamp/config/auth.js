module.exports = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticatied()) {
    return next();
  }
  req.flash("err_msg", "Please log in to view the pages");
  res.redirect("/users/login");
};

module.exports = function forwardAuthenticated(req, res, next) {
  if (!req.isAuthenticatied()) {
    return next();
  }
  res.redirect("/dashboard");
};
