import React, { Component } from "react";
import "./boards.css";
import CardGroup from "../../components/card-group/card-group";
import { DragDropContext } from "react-beautiful-dnd";

class Boards extends Component {
  render() {
    return (
      <DragDropContext>
        <div className="full-page">
          <div className="d-flex" style={{ paddingTop: "8vh" }}>
            <CardGroup />
            <CardGroup />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default Boards;
