import React, { Component } from "react";

import "./Roulette.css";
import Slot from "../slot/Slot";

class Roulette extends Component {
  constructor() {
    super();

    this.slots = [];
  }

  stopSlot() {
    const slot = this.slots[0];

    slot.stop();
  }

  render() {
    return (
      <div className="roulette">
        <Slot
          ref={slot => (this.slots[0] = slot)}
          slotValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />

        <button onClick={this.stopSlot.bind(this)}>Stop</button>
      </div>
    );
  }
}

export default Roulette;
