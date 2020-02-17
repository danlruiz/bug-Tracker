import React from "react";
import Draggable from "react-draggable"; // Both at the same time
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/index";

function Card() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
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
          <div className="card-header">
            Counter {counter}{" "}
            <button
              onClick={() => dispatch(increment(2))}
              className="btn btn-primary"
            >
              +
            </button>
            <button
              onClick={() => dispatch(decrement(2))}
              className="btn btn-danger"
            >
              -
            </button>
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </Draggable>
    </React.Fragment>
  );
}

export default Card;
