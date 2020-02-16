import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Boards from "./views/boards/Boards";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/boards" component={Boards} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
