import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from '../NotFound/NotFound';
export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
