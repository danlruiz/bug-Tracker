import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
