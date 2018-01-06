import React, { Component } from "react";

import "./RoulettePage.css";
import Roulette from "../roulette/Roulette";

import { history } from "../../App";

class RoulettePage extends Component {
  render() {
    return (
      <div className="roulette-page">
        <div className="roulette-page__header">
          <button className="flat-button" onClick={e => history.goBack()}>
            <i className="back-icon" />
          </button>

          <span className="roulette-page__title">Montaditos Roulette</span>
        </div>

        <div className="roulette-page__content">
          <Roulette />
        </div>
      </div>
    );
  }
}

export default RoulettePage;
