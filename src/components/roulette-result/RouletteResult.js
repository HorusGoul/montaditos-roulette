import React, { Component } from "react";
import data from "../../data.json";

import "./RouletteResult.css";

class RouletteResult extends Component {
  render() {
    const { value } = this.props;
    const montadito = data.montaditos[value - 1];

    return (
      <div className="roulette-result">
        <div className="roulette-result__number">{montadito.number}</div>

        <div className="roulette-result__content">
          <div className="roulette-result__name">{montadito.name}</div>

          <div className="roulette-result__badges">
            {montadito.vegetarian && <span className="vegetarian" />}
            {montadito.new && <span className="new">nuevo</span>}
            {montadito.brioche && (
              <span className="brioche">pan de brioche</span>
            )}
            {montadito.cereal && (
              <span className="cereal">pan de cereales</span>
            )}
            {montadito.chapata && (
              <span className="chapata">pan de chapata</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RouletteResult;
