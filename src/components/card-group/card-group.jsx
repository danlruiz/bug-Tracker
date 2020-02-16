import React, { Component } from "react";
import "./card-group.css";
import Card from "../card";
class CardGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="group">
          <p style={{ fontWeight: "500" }} className="mt-3 text-center">
            {" "}
            List of tasks
          </p>
          <div className="cards">
            <Card />
            <Card />
          </div>
          <p className="text-center">+ Add another card</p>
        </div>
      </React.Fragment>
    );
  }
}

export default CardGroup;
