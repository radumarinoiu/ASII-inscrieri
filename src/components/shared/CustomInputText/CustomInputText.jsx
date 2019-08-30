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
      max
    } = this.props;
    return (
      <Fragment>
        {this.props && (
          <div class="group-items col s12">
            <label for={name}>{label}</label>
            <input
              id={id}
              onChange={handleChange}
              name={name}
              minLength={min}
              maxLength={max}
              min={min}
              max={max}
              type={type}
              class="validate"
              value={value}
              placeholder={placeholder}
            />
          </div>
        )}
      </Fragment>
    );
  }
}
