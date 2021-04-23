import React, { useContext } from "react";
import axios from "axios";
import UserProvider from "../../contexts/UserProvider";
import _ from "lodash";
const fs = require("fs");

// const userData = useContext(UserProvider.context);
// const {id, name} =  userData;

class GetRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalBalance: 0,
    };
  }

  componentDidMount() {
    axios.get(`https://piggybankbackend.mybluemix.net/getBalance/113403933642326679347`)
      .then(res => {
        // const persons = res.data;
        this.setState({ totalBalance: res.data });
      })
  }

  render() {
    const { totalBalance } = this.state;

    return (
      <div>
        <div className="form-content-right">
          <h1>Your account balance is</h1>
          <button className="form-input-btn-balance">₹ {totalBalance}</button>
        </div>
      </div>
    );
  }
}

export default GetRequest;
