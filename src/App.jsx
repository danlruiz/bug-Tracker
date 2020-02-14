import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
