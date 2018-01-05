import React, { Component } from "react";

import "./RoulettePage.css";
import Roulette from "../roulette/Roulette";

class RoulettePage extends Component {
  render() {
    return (
      <div className="roulette-page">
        <div className="roulette-page__header">Montaditos Roulette</div>

        <div className="roulette-page__content">
          <Roulette />
        </div>
      </div>
    );
  }
}

export default RoulettePage;
