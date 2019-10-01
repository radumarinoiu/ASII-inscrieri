import React, { Component, Fragment } from "react";
import "./CustomTextarea.scss";
import classnames from "classnames";
export default class CustomTextarea extends Component {
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
      handleOnBlur,
      max
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
            <textarea
              id={id}
              onChange={handleChange}
              name={name}
              minLength={min}
              onBlur={handleOnBlur}
              maxLength={max}
              rows={3}
              min={min}
              max={max}
              type={type}
              className="validate"
              value={value}
              placeholder={placeholder}
            />

            {dataError && dataError !== "OK" && (
              <div className="errorMessage">
                <span>{dataError}</span>{" "}
              </div>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}
