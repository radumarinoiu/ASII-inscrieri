import React, { Component } from "react";
import "./CustomSelect.scss";
export default class CustomSelect extends Component {
  render() {
    const {
      label,
      departments,
      dataError,
      selectedDepartments,
      handleChange
    } = this.props;
    return (
      this.props && (
        <div className="box col s12 m12 l12 xl12">
          <span className="title">{label}</span>
          <select
            disabled={selectedDepartments.length > 1}
            onChange={handleChange}
          >
            <option value="">Selectează departament</option>
            {departments &&
              Object.entries(departments).map(([key, value]) => {
                if (!value.selected)
                  return (
                    <option key={key} value={key}>
                      {value.name}
                    </option>
                  );
                return null;
              })}
          </select>
          {dataError && dataError !== "OK" && <div>{dataError}</div>}
        </div>
      )
    );
  }
}
