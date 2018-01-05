import React, { Component } from "react";

import "./SlotItem.css";

class SlotItem extends Component {
  render() {
    const { value } = this.props;

    return <div className="slot-item">{value}</div>;
  }
}

SlotItem.defaultProps = {
  value: "Empty"
};

export default SlotItem;
