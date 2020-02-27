import React, { Component } from "react";
import "./card-group.css";
import Card from "../card";
import { Droppable } from "react-beautiful-dnd";
class CardGroup extends Component {
  state = {
    cards: [
      { index: 1, draggableId: "draggable-1" },
      { index: 2, draggableId: "draggable-2" },
      { index: 3, draggableId: "draggable-3" },
      { index: 4, draggableId: "draggable-4" }
    ]
  };
  render() {
    return (
      <Droppable droppableId="droppable-1" type="cards" isCombineEnabled>
        {(provided, snapshot) => (
          <div
            className="group"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <p style={{ fontWeight: "500" }} className="mt-3 text-center">
              {" "}
              List of tasks
            </p>

            <div className="cards">
              {this.state.cards.map(card => (
                <Card key={card.index} card={card} />
              ))}
            </div>
            {provided.placeholder}

            <p className="text-center">+ Add another card</p>
          </div>
        )}
      </Droppable>
    );
  }
}

export default CardGroup;
