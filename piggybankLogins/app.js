const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
var cookieSession = require("cookie-session");

// TOCHANGE
// const URL = "http://localhost:3000";
const URL = "https://piggy-bank-frontend.mybluemix.net";


require("./LoginWith/google");
require("./LoginWith/facebook");
require("./LoginWith/github");

app.use(
  cors({
    origin: URL, // <-- location of the react app were connecting to
    credentials: true,
    allRoutes: true,
    allowOrigins: "*",
    allowCredentials: false,
    allowRequestHeaders: "*",
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(
  cookieSession({
    name: "Banking-session",
    keys: ["key1", "key2"],
  })
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("pls login"));
app.get("/home", isLoggedIn, (req, res) => res.send("Logged In successfully."));

app.get("/failed", (req, res) => res.send("You Failed to log in!"));

app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  user = {};
  console.log("log out");
  res.redirect(URL);
});

app.get("/user",(req,res)=> {
  console.log("Getting user data")
  res.send(user)
})

app.get("/auth/github", passport.authenticate("github"));
app.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/failed" }),
  (req, res) => {
    console.log("log in");
    res.redirect(`${URL}/profile`);
  }
);

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/failed" }),
  (req, res) => {
    console.log("log in");
    res.redirect(`${URL}/profile`);
  }
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    console.log("log in");
    res.redirect(`${URL}/profile`);
  }
);

const PORT = process.env.PORT || 4321;
app.listen(PORT, () => console.log(`Frontend Server started on port ${PORT}`));
