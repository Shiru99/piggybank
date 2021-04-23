import { Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
// import MenuBar from "./components/menus/MenuBar";

function App() {
  return (
    <Router history={history}>
      <UserProvider>
        <Route exact path="/profile" component={Profile} />
      </UserProvider>
      <Route path="/" exact component={Home} />
    </Router>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>Welcome to Piggy bank</h1>
  //       <p>Please Login to proceed</p>
  //     </header>
  //     <CardList />
  //     <div style={{ marginBottom: 70 }} />
  //     <Footer/>
  //   </div>
  // );
}

export default App;
