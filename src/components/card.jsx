import React, { Component } from "react";
import Draggable from "react-draggable"; // Both at the same time

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <Draggable>
          <div
            className="card text-white bg-dark mb-3"
            style={{ maxWidth: "18rem", cursor: "pointer" }}
          >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Draggable>
      </React.Fragment>
    );
  }
}

export default Card;
