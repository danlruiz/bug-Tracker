import React, { Component } from "react";
import "./card-group.css";
import Card from "../card";
class CardGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="group">
          <p style={{ fontWeight: "500" }}> List of tasks</p>
          <div className="cards">
            <Card />
            <Card />
          </div>
          <p>+ Add another card</p>
        </div>
      </React.Fragment>
    );
  }
}

export default CardGroup;
