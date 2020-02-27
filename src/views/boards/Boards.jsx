import React, { Component, useCallback } from "react";
import "./boards.css";
import CardGroup from "../../components/card-group/card-group";
import { DragDropContext } from "react-beautiful-dnd";

function Boards() {
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="full-page">
        <div className="d-flex" style={{ paddingTop: "8vh" }}>
          <CardGroup />
        </div>
      </div>
    </DragDropContext>
  );
}

export default Boards;
