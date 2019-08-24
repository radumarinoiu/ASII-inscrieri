import React, { Component, Fragment } from "react";
import "./CustomButton.scss";
import classnames from "classnames";

export default class CustomButton extends Component {
  render() {
    const { handleClick, type, disable } = this.props;

    return type === "back" ? (
      <button onClick={handleClick} className="btn btn-special back" disabled={disable}>
        <span className="titleButton">Pasul Anterior</span>
        <span>
          <i class="fas fa-arrow-left" />
        </span>
      </button>
    ) : (
      <button onClick={handleClick} name="next" className="btn btn-special next" disabled={disable}>
        <span className="titleButton">Pasul Urmator</span>
        <span >
          <i  class="fas fa-arrow-right" />
        </span>
      </button>
    );
  }
}
