const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.use(
  new GithubStrategy(
    {
      clientID: "43945abae59cb2af5112",
      clientSecret: "87f3136f03f5b2f563252015c411b608582d0ef9",
      callbackURL: "/github/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(JSON.stringify(profile));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);
