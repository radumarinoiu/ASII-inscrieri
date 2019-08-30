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
      max
    } = this.props;
    return (
      <Fragment>
        {this.props && (
          <div class="group-items col s12">
            <label for={name}>{label}</label>
            <textarea
              id={id}
              onChange={handleChange}
              name={name}
              minLength={min}
              maxLength={max}
              rows={3}
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
