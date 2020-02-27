import React, { Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mt-5">
          <div className="row">
            <div className="col-3 nopadding">
              <h4 className="text-center" style={{ marginTop: "20vh" }}>
                Your workspaces
              </h4>
              <ul>
                <li>
                  <Link to="/boards">Project</Link>
                </li>
                <li>{/* <Link>Company</Link> */}</li>
                <li>{/* <Link>Client</Link> */}</li>
              </ul>
            </div>
            <div className="col-9 nopadding">
              <h1 style={{ marginTop: "10vh" }}>Your boards</h1>
              <div className="row mt-5">
                <Link to="/boards">
                  <div className="board-image"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
