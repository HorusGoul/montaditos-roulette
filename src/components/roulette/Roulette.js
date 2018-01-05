import classNames from "classnames";
import React, { Component } from "react";

import "./Roulette.css";
import Slot from "../slot/Slot";
import RouletteResult from "../roulette-result/RouletteResult";
import data from "../../data.json";

class Roulette extends Component {
  constructor() {
    super();

    this.slots = [];

    this.state = {
      results: [],
      running: true
    };
  }

  stopSlot() {
    const slot = this.slots[0];

    slot.stop();
  }

  runSlot() {
    const slot = this.slots[0];

    slot.run();

    this.setState({
      running: true
    });
  }

  onSlotResult(value) {
    const { results } = this.state;

    this.setState({
      results: [value, ...results],
      running: false
    });
  }

  render() {
    const { results, running } = this.state;

    const buttonClass = classNames("button", {
      disabled: running
    });

    return (
      <div className="roulette">
        <div className="roulette__slots">
          <Slot
            ref={slot => (this.slots[0] = slot)}
            slotValues={shuffleArray(
              data.montaditos.map(value => value.number)
            )}
            onResult={this.onSlotResult.bind(this)}
          />
        </div>

        {results.length !== 0 && (
          <div className="roulette__results">
            <div className="roulette__results-title">Resultados</div>

            {results.map((value, index) => (
              <RouletteResult value={value} key={index} />
            ))}
          </div>
        )}

        <div className="roulette__controls">
          <button className={buttonClass} onClick={this.runSlot.bind(this)}>
            Run
          </button>
        </div>
      </div>
    );
  }
}

function shuffleArray(d) {
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d;
}

export default Roulette;
