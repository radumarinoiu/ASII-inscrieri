import React, { Component, Fragment } from "react";
import "./CustomChipsComponent.scss";
export default class CustomChipsComponent extends Component {
  render() {
    const {
      handleRemoveOption,
      label,
      selectedDepartments
    } = this.props;
    return (
      <Fragment>
        {this.props && (
          <div className="group-items col s12">
            <label>{label}</label>
            <div className="chips-all">
              {selectedDepartments &&
                selectedDepartments.map(department => {
                  return (
                    <div className="chip-container">
                      <span className="chip-name">{department}</span>
                      <span className="delete-chip">
                        <img
                          name={department}
                          onClick={handleRemoveOption}
                          src={
                            process.env.PUBLIC_URL + "/assets/images/close.svg"
                          }
                          alt=""
                        />
                      </span>
                    </div>
                  );
                })}
              {/* { departments && Object.entries(departments).map(([key, value]) => {
              if (value.selected)
                
            })} */}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
