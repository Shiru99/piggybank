const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "183141896821-sc2i7rbe7blo4fnr36e28apk60uf8lku.apps.googleusercontent.com",
      clientSecret: "nSKxbtOWlXZsSyuHwJqaANg7",
      callbackURL: "/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(JSON.stringify(profile));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);
