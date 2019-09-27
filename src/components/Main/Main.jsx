import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
// import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from '../NotFound/NotFound';
import Home from "../Home/Home";
import SuccessSubmit from '../SuccessSubmit/SuccessSubmit';
import ErrorSubmit from '../ErrorSubmit/ErrorSubmit';
import AdminLogin from '../login/AdminLogin';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component= { Home } />
          <Route path="/dashboard" component= { Dashboard }/>
          <Route exact path="/success" component={SuccessSubmit} />
          <Route exact path="/login" component={AdminLogin}/>
          <Route exact path="/error-on-submit" component={ErrorSubmit}/>
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
