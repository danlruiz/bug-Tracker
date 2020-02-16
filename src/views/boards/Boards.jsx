import React, { Component } from "react";
import CardGroup from "../../components/card-group/card-group";
class Boards extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="d-flex">
            <CardGroup />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Boards;
