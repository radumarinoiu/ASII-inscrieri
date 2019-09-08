import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from '../NotFound/NotFound';
import SuccessSubmit from '../SuccessSubmit/SuccessSubmit';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/success" component={SuccessSubmit} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
