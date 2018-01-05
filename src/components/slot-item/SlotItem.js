import classNames from "classnames";
import React, { Component } from "react";

import "./SlotItem.css";

class SlotItem extends Component {
  render() {
    const { value, animationDelay, animationDuration, running } = this.props;

    const className = classNames("slot-item", {
      "slot-item--stopped": !running
    });

    return (
      <div
        className={className}
        style={{
          animationDelay: `${animationDelay}ms`,
          animationDuration: `${animationDuration}ms`
        }}
      >
        {value}
      </div>
    );
  }
}

SlotItem.defaultProps = {
  value: "Empty",
  animationDelay: 0,
  animationDuration: 2000
};

export default SlotItem;
