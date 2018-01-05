import React, { Component } from "react";

import "./Roulette.css";
import Slot from "../slot/Slot";
import RouletteResult from "../roulette-result/RouletteResult";

class Roulette extends Component {
  constructor() {
    super();

    this.slots = [];

    this.state = {
      results: []
    };
  }

  stopSlot() {
    const slot = this.slots[0];

    slot.stop();
  }

  runSlot() {
    const slot = this.slots[0];

    slot.run();
  }

  onSlotResult(value) {
    const { results } = this.state;

    this.setState({
      results: [...results, value]
    });
  }

  render() {
    const { results } = this.state;

    return (
      <div className="roulette">
        <div className="roulette__slots">
          <Slot
            ref={slot => (this.slots[0] = slot)}
            slotValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            onResult={this.onSlotResult.bind(this)}
          />
        </div>

        <div className="roulette__results">
          {results.map((value, index) => (
            <RouletteResult value={value} key={index} />
          ))}
        </div>

        <div className="roulette__controls">
          <button className="button" onClick={this.stopSlot.bind(this)}>
            Stop
          </button>
          <button className="button" onClick={this.runSlot.bind(this)}>
            Run
          </button>
        </div>
      </div>
    );
  }
}

export default Roulette;
