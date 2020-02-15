import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "./components/card-group/card-group";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="d-flex">
          <CardGroup />
        </div>

        {/* <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

              </ul>
            </nav>
            <Switch>
              <Route path="/">
                <CardGroup />
              </Route>
            </Switch>
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;
