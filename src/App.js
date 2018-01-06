import React, { Component } from "react";
import MainMenu from "./components/main-menu/MainMenu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoulettePage from "./components/roulette-page/RoulettePage";

import createHistory from "history/createBrowserHistory";

import data from "./data.json";

export const history = createHistory();

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route
            exact
            path="/100"
            render={() => <RoulettePage montaditos={data.categories["100m"]} />}
          />
          <Route
            exact
            path="/vegetarian"
            render={() => (
              <RoulettePage montaditos={data.categories.vegetarian} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
