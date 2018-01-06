import React, { Component } from "react";
import MainMenu from "./components/main-menu/MainMenu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoulettePage from "./components/roulette-page/RoulettePage";

import createHistory from "history/createBrowserHistory";

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/100" render={() => <RoulettePage />} />
          <Route exact path="/vegetarian" render={() => <RoulettePage />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
