import React, { Component } from "react";
import Draggable from "react-draggable"; // Both at the same time

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <Draggable>
          <div
            className="card text-black bg-light mb-3"
            style={{
              maxWidth: "18rem",
              cursor: "pointer",
              borderRadius: "10px"
            }}
          >
            <div className="card-header">Header</div>
            <div className="card-body">
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
