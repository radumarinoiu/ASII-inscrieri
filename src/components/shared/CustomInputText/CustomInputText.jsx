import React, { Component, Fragment } from "react";

export default class CustomInputText extends Component {
  render() {
    const {
      dataError,
      type,
      name,
      id,
      value,
      label,
      iconCode,
      handleChange,
      min,max
    } = this.props;
    return (
      <Fragment>
        {this.props && (
          <div class="input-field col s12">
            <i class="material-icons prefix">{iconCode}</i>
            <input
              id={id}
              onChange={handleChange}
              name={name}
              minLength={min}
              maxLength={max}
              type={type}
              class="validate"
              value={value}
            />
            <label for={name}>{label}</label>
            <span
              class="helper-text"
              data-error={dataError}
              data-success=""
            >
               * Required Field
            </span>
          </div>
        )}
      </Fragment>
    );
  }
}
