import React, { Component, Fragment } from "react";
import "./CustomTextarea.scss";
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
          <div className="group-items col s12">
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
            <div className="errorMessage">
              {dataError && dataError !== "OK" && <span>{dataError}</span>}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
