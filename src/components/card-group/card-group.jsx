import React, { Component } from "react";
import "./card-group.css";
class CardGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="group">
          <p style={{ fontWeight: "500" }}> List of tasks</p>
          <p>+ Add another card</p>
        </div>
      </React.Fragment>
    );
  }
}

export default CardGroup;
