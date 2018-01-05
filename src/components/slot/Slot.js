import React, { Component } from "react";
import SlotItem from "../slot-item/SlotItem";

import "./Slot.css";

const MAX_SLOT_VALUES = 3;

class Slot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slotValues: this.props.slotValues,
      currentValues: [],
      speed: 800,
      running: true
    };

    this.currentIndex = 0;
    this.currentValueIndex = 0;
  }

  componentDidMount() {
    this.pickNextValue.bind(this)();
  }

  componentWillUnmount() {
    clearInterval(this._slotInterval);
  }

  pickNextValue() {
    const { slotValues, currentValues, speed, running } = this.state;

    if (!running) {
      return;
    }

    if (this.currentIndex === slotValues.length) {
      this.currentIndex = 0;
    }

    const nextValue = slotValues[this.currentIndex];

    if (this.currentValueIndex === MAX_SLOT_VALUES) {
      this.currentValueIndex = 0;
    }

    currentValues[this.currentValueIndex] = nextValue;

    this.setState({
      currentValues
    });

    this.currentIndex++;
    this.currentValueIndex++;

    this._slotInterval = setTimeout(
      this.pickNextValue.bind(this),
      speed * 0.333333333333
    );
  }

  stop() {
    const { speed } = this.state;

    console.log(this.currentIndex, this.currentValueIndex);

    this.setState({
      running: false
    });
  }

  render() {
    const { currentValues, speed, running } = this.state;

    return (
      <div className="slot">
        <SlotItem
          value={currentValues[0]}
          animationDuration={speed}
          running={running}
        />
        <SlotItem
          value={currentValues[1]}
          animationDuration={speed}
          animationDelay={speed * 0.333333333333}
          running={running}
        />
        <SlotItem
          value={currentValues[2]}
          animationDuration={speed}
          animationDelay={speed * 0.666666666666}
          running={running}
        />
      </div>
    );
  }
}

Slot.defaultProps = {
  slotValues: []
};

export default Slot;
