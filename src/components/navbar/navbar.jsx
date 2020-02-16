import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <a className="navbar-brand" href="./">
          Trello Clone
        </a>
      </nav>
    );
  }
}

export default Navbar;
