import React, { Component } from "react";
import "./boards.css";
import CardGroup from "../../components/card-group/card-group";

class Boards extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="full-page">
          <div className="d-flex" style={{ paddingTop: "8vh" }}>
            <CardGroup />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Boards;
