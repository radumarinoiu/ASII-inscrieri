import React, { Component, Fragment } from "react";
import "./CustomInputText.scss";
import classnames from "classnames";
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
          <div
            className={classnames("group-items col s12", {
              error: dataError && dataError !== "OK"
            })}
          >
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

            {dataError && dataError !== "OK" && (
              <div className="errorMessage">
                <span>{dataError}</span>
              </div>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}
