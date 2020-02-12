import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bug-Tracker</h1>
          <div></div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is our bug tracker application</p>
        </header>
      </div>
    );
  }
}

export default App;
