import React, { Component, Fragment } from "react";
import "./CustomInputText.scss";
export default class CustomInputText extends Component {
  render() {
    const {
      dataError,
      type,
      name,
      id,
      value,
      label,
      handleChange,
      placeholder,
      min,
      max,
      handleOnBlur
    } = this.props;
    return (
      <Fragment>
        {this.props && (
          <div className="group-items col s12">
            <label htmlFor={name}>{label}</label>
            <input
              id={id}
              onChange={handleChange}
              name={name}
              onBlur={handleOnBlur}
              minLength={min}
              maxLength={max}
              min={min}
              max={max}
              type={type}
              className="validate"
              value={value}
              placeholder={placeholder}
            />
            <div className="errorMessage">
              {dataError && dataError !== "OK" && <span>{dataError}</span>}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
