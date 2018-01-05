import React, { Component } from "react";
import anime from "animejs";
import SlotItem from "../slot-item/SlotItem";

import "./Slot.css";

const INITIAL_SPEED = 100;
const MAX_SPEED = 1000;

class Slot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slotValues: this.props.slotValues,
      currentValue: null,
      speed: INITIAL_SPEED,
      running: false
    };

    this.currentIndex = 0;
  }

  componentDidMount() {
    this.run();
  }

  componentWillUnmount() {
    clearInterval(this._slotInterval);
  }

  pickNextValue() {
    const { slotValues, speed, running } = this.state;

    if (!running) {
      return;
    }

    if (this.currentIndex === slotValues.length) {
      this.currentIndex = 0;
    }

    const nextValue = slotValues[this.currentIndex];

    this.setState({
      currentValue: nextValue
    });

    this.currentIndex++;

    this._slotInterval = setTimeout(this.pickNextValue.bind(this), speed);
  }

  stop() {
    const { speed } = this.state;

    const animeSpeed = {
      speed
    };

    anime({
      targets: animeSpeed,
      speed: MAX_SPEED,
      round: 1,
      easing: "easeInBack",
      duration: 3000,
      complete: () => {
        const { currentValue } = this.state;

        this.setState({
          running: false
        });

        this.props.onResult(currentValue);
      },
      update: () => {
        this.setState(animeSpeed);
      }
    });
  }

  run() {
    const animeSpeed = {
      speed: MAX_SPEED
    };

    anime({
      targets: animeSpeed,
      speed: INITIAL_SPEED,
      round: 1,
      easing: "easeOutBack",
      duration: 7000,
      begin: () => {
        this.setState({
          running: true
        });

        this.pickNextValue.bind(this)();
      },
      update: () => {
        this.setState(animeSpeed);
      }
    });
  }

  render() {
    const { currentValue } = this.state;

    return (
      <div className="slot">
        <SlotItem value={currentValue} />
      </div>
    );
  }
}

Slot.defaultProps = {
  slotValues: []
};

export default Slot;
