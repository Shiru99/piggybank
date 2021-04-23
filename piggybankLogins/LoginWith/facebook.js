const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.deserializeUser( (user, cb) => {
  cb(null, user);
});

passport.serializeUser( (user, cb)=> {
  cb(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: "490717212116551",
      clientSecret: "b0e7e8963c743d991a532577344b8c7f",
      callbackURL: "/facebook/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(JSON.stringify(profile));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);


