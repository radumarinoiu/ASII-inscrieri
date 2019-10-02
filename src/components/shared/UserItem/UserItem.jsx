import React, { Component, Fragment } from "react";
import "./UserItem.scss";
import classnames from "classnames";

export default class UserItem extends Component {
  handleClickContainer = e => {
    this.props.handleClick(this.props.volunteer._id);
  };

  showDepartmentsInOrder = () => {
    const selectedDepartments = this.props.volunteer.selectedDepartments || [];
    if (selectedDepartments.length === 0) {
      const departments = this.props.volunteer.departments;
      for (let dep in departments) {
        if (departments[dep].selected) {
          selectedDepartments.push(dep);
        }
      }
    }
    return selectedDepartments;
  }

  render() {
    return (
      this.props.volunteer && (
        <Fragment>
          <div
            className={classnames("userItem", {
              active: this.props.volunteer._id === this.props.activeID,
              accepted: this.props.volunteer.status === "accepted",
              denided: this.props.volunteer.status === "denided",
              maybe: this.props.volunteer.status === "maybe"
            })}
            onClick={this.handleClickContainer}
          >
            <div className="avatar">
              <i className="far fa-user-circle"></i>
            </div>
            <div className="userInfo">
              <p className="name">{this.props.volunteer.name}</p>
              <div className="qualityD">
                <p className="quality">{this.props.volunteer.bestQuality}</p>
                <div className="selectedDepartments">
                  {this.showDepartmentsInOrder().map(element => {
                    return (
                      <span className="departmentName" key={element}>
                        {element}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    );
  }
}
