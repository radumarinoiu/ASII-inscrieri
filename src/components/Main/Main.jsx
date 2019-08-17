import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from '../NotFound/NotFound';
import ComplexTextInput from '../shared/ComplexTextInput/ComplexTextInput';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/input" component={ComplexTextInput}/>
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
