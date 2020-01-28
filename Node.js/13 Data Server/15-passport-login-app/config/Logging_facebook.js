const FacebookStrategy = require("passport-facebook").Strategy;

const strategy = new FacebookStrategy(
  {
    clientID: "2588440934707785",
    clientSecret: "ab80c3a547c407601ddd61a9a73c0ab1",
    callbackURL: "http://localhost:5005/users/auth/facebook/callback"
  },
  passport.use(
    "facebook",
    new FacebookStrategy(
      optionsFacebook,
      (accessToken, refresToken, profile, done) => {
        User.findOne({ email: profile._json.email })
          .then(userData => {
            if (!userData) {
              return done(null, false, {
                message: "This email is not registered"
              });
            } else {
              return done(null, userData);
            }
          })
          .catch(err => {
            done(err);
          });
      }
    )
  )
);

module.exports = strategy;
