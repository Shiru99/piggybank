import React from "react";
import logo from ".././logo.svg";
import "../App.css";
import CardList from "../components/cards/CardList";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Piggy bank</h1>
        <p>Please Login to proceed</p>
      </header>
      <CardList />
      <div style={{ marginBottom: 70 }} />
      <Footer />
    </div>
  );
};
export default Home;
