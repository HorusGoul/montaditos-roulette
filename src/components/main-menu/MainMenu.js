import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./MainMenu.css";

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu">
        <div className="main-menu__header">
          <div className="main-menu__logo" />
        </div>

        <div className="main-menu__content">
          <Link to="/100">
            <div className="menu-entry c100">
              <span className="menu-entry__title">100 montaditos</span>
            </div>
          </Link>

          <Link to="/vegetarian">
            <div className="menu-entry cvegetarian">
              <span className="menu-entry__title">Vegetarianos</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainMenu;
