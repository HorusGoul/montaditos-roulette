import React, { Component } from "react";
import SlotItem from "../slot-item/SlotItem";

import "./Slot.css";

class Slot extends Component {
  render() {
    return (
      <div className="slot">
        <SlotItem />
      </div>
    );
  }
}

export default Slot;
