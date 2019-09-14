import React, { Component, Fragment } from "react";
import "./UserItem.scss";
import classnames from "classnames";
export default class UserItem extends Component {
  handleClickContainer = e => {
    this.props.handleClick(this.props.volunteer._id);
  };
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
                  {Object.entries(this.props.volunteer.departments).map(
                    ([key, value]) => {
                      if (value.selected)
                        return (
                          <span className="departmentName" key={key}>
                            {key}
                          </span>
                        );
                      return null;
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    );
  }
}
