import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Welcome to Fantasy Land</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;