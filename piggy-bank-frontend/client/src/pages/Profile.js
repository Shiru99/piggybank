import React, { useContext } from "react";
import logo from ".././logo.svg";
import CardList from "../components/cards/CardList";
import Footer from "../components/footer/Footer";
import "../App.css";

import LogoutButton from "../components/buttons/logoutButton";
import FacebookIcon from "../res/facebook.png";
import GithubIcon from "../res/github.png";
import GoogleIcon from "../res/google.png";
import RedirectIcon from "../res/redirect.png";


import UserProvider from "../contexts/UserProvider";
import _ from "lodash";

import Form from "../components/displays/Form";
import Col from "../components/wrappers/Col";

const Profile = () => {

  var userData = useContext(UserProvider.context);
  const text = _.isEmpty(userData)
    ? "Please login to enjoy Piggy Bank services "
    : `Welcome, ${userData["displayName"]}`;



  // creds.push(userData["id"]);
  // const selectedData = selected === "All" ? userData : userData[selected];
  // const jsonCode = JSON.stringify(selectedData, null, 4);

  // const options = Object.keys(userData).filter((key) => {
  //   return userData[key] !== null;
  // });



  var logout;
  var profilepic = "https://www.w3schools.com/images/w3lynx_200.png";
  var userName = userData["displayName"];
  if (userData["provider"] === "facebook") {
    logout = FacebookIcon;
  } else if (userData["provider"] === "github") {
    logout = GithubIcon;
    userName = userData["username"];
    profilepic = userData["photos"][0]["value"];
  } else if (userData["provider"] === "google") {
    logout = GoogleIcon;
    profilepic = userData["photos"][0]["value"];
  }

  const app = {
    img: logout,
    // TOCHANGE
    href: "https://piggybanklogins.mybluemix.net/logout",
    alt: "logout-icon",
    colors: "#5BDAFB",
    txt: "Logout",
    name: "Logout",
  };

  const redirect0 = {
    img: RedirectIcon,
    // TOCHANGE
    href: "https://us-south.functions.appdomain.cloud/api/v1/web/db8f6095-39ac-471d-8b39-1895ee9eb44a/redirecting/Redirect%20to%20google",
    alt: "redirect-icon",
    colors: "#5BDAFB",
    txt: "redirect",
    name: "redirect",
  };

  if (_.isEmpty(userData)) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Piggy bank</h1>
          <p>{text}</p>
        </header>
        <CardList />
        <div style={{ marginBottom: 70 }} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="page">
        <div>
          <header className="App-header1">
            <img src={logo} className="App-logo" alt="logo" />

            <p>{text}</p>
            <LogoutButton app={app} />
            <LogoutButton app={redirect0} />
          </header>
        </div>
        <Col className="col-8">
          <Form />
        </Col>
        <Col className="col-4">
          <img src={profilepic} className="profilePic" alt="profile pic" />
          <p className="userDetails">{userName}</p>
        </Col>
        <Footer className="footer" style={{ textAlign: "center" }} />
      </div>
    );
  }
};
export default Profile;
