import React, { Component } from "react";
import "./CustomButton.scss";

export default class CustomButton extends Component {
  render() {
    const { handleClick, title, type, disable } = this.props;
    if (type === "submit") {
      return (
        <button
          onClick={handleClick}
          name="submit"
          type="submit"
          className="btn btn-special next"
          disabled={disable}
        >
          <span className="titleButton"> {title}</span>
          <span>
            <i className="fas fa-arrow-right" />
          </span>
        </button>
      );
    }
    if (type === "send") {
      return (
        <button
          onClick={handleClick}
          name="next"
          className="btn btn-special next"
          disabled={disable}
        >
          <span className="titleButton"> Trimite</span>
          <span>
            <i className="fas fa-paper-plane"></i>
          </span>
        </button>
      );
    } else
      return type === "back" ? (
        <button
          onClick={handleClick}
          className="btn btn-special back"
          disabled={disable}
        >
          <span className="titleButton">{title}</span>
          <span>
            <i className="fas fa-arrow-left" />
          </span>
        </button>
      ) : (
        <button
          onClick={handleClick}
          name="next"
          className="btn btn-special next"
          disabled={disable}
        >
          <span className="titleButton"> {title || "Pasul urmator"}</span>
          <span>
            <i className="fas fa-arrow-right" />
          </span>
        </button>
      );
  }
}
