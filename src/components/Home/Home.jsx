import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import classnames from "classnames";

import {
  addNewComment,
  removeComment,
  handleStepChange
} from "../../actions/mainActions";

class Home extends Component {
  handleInputChange = e => {
    this.props.handleInputChange({
      name: e.target.name,
      value: e.target.value
    });
  };
  handleStepChange = stepNo => {
    this.props.handleStepChange(stepNo);
  };

  addNewComment = e => {
    console.log(e);
    e.preventDefault();
    const { fName, lName, subject, message } = this.props;
    if (fName !== "" && lName !== "" && subject !== "" && message !== "")
      this.props.addNewComment();
  };
  removeComment = e => {
    this.props.removeComment(e.target.id);
  };
  render() {
    const { comments, stepNo } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        {this.props && (
          <div>
            <div className="row">
              <div className="header-image col s12 m12 l12" />
            </div>
            <div className="container">
              <div className="row center">
                <div className="register-form col s12  center">
                  <div className="nav-list-icons col s12 m12 l12">
                    <div className="container-for-btn">
                      <span className="tooltip-simple">Home</span>
                      <button
                        className={classnames("btn-nav-list", {
                          "active": stepNo === "zero"
                        })}
                        onClick={() => this.handleStepChange("zero")}
                      >
                        <i class="fas fa-home" />
                      </button>
                    </div>
                    <div className="container-for-btn">
                      <span className="tooltip-simple">Despre tine</span>
                      <button
                        className={classnames("btn-nav-list", {
                          "active": stepNo === "one"
                        })}
                        onClick={() => this.handleStepChange("one")}
                      >
                        <i class="fas fa-info-circle" />
                      </button>
                    </div>
                    <div className="container-for-btn">
                      <span className="tooltip-simple">De ce ASII?</span>
                      <button
                        className={classnames("btn-nav-list", {
                          "active ": stepNo === "two"
                        })}
                        onClick={() => this.handleStepChange("two")}
                      >
                        <i class="far fa-question-circle" />
                      </button>
                    </div>
                    <div className="container-for-btn">
                      <span className="tooltip-simple">Unde in ASII?</span>
                      <button
                        className={classnames("btn-nav-list", {
                          "active": stepNo === "three"
                        })}
                        onClick={() => this.handleStepChange("three")}
                      >
                        <i class="fas fa-search-location" />
                      </button>
                    </div>

                    {/* <button
                      className="btn-nav-list tooltipped"
                      data-position="bottom"
                      data-tooltip="I am a tooltip"
                    >
                      <i class="fas fa-info-circle" />
                    </button>
                    <button className="btn-nav-list">
                      <i class="far fa-question-circle" />
                    </button>
                    <button className="btn-nav-list">
                      <i class="fas fa-search-location" />
                    </button> */}
                  </div>
                  <div />
                  <div
                    className={classnames(
                      "data-container z-depth-1 col s12 m12 l12",
                      { "step-zero animated fadeIn": stepNo === "zero" }
                    )}
                  >
                    <p>
                      zero Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur, fuga. Reiciendis repellendus, quas
                      debitis asperiores eius excepturi, magnam ut officia neque
                      saepe, optio tempora sed consequuntur maiores et.
                      Officiis, nesciunt.
                    </p>
                  </div>
                  <div
                    className={classnames(
                      "data-container z-depth-1 col s12 m12 l12",
                      { "step-one animated fadeIn ": stepNo === "one" }
                    )}
                  >
                    <p>
                      one Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur, fuga. Reiciendis repellendus, quas
                      debitis asperiores eius excepturi, magnam ut officia neque
                      saepe, optio tempora sed consequuntur maiores et.
                      Officiis, nesciunt.
                    </p>
                  </div>
                  <div
                    className={classnames(
                      "data-container z-depth-1 col s12 m12 l12",
                      { "step-two animated fadeIn": stepNo === "two" }
                    )}
                  >
                    <p>
                      two Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur, fuga. Reiciendis repellendus, quas
                      debitis asperiores eius excepturi, magnam ut officia neque
                      saepe, optio tempora sed consequuntur maiores et.
                      Officiis, nesciunt.
                    </p>
                  </div>
                  <div
                    className={classnames(
                      "data-container z-depth-1 col s12 m12 l12",
                      { "step-two animated fadeIn": stepNo === "three" }
                    )}
                  >
                    <p>
                      three Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Consectetur, fuga. Reiciendis repellendus, quas
                      debitis asperiores eius excepturi, magnam ut officia neque
                      saepe, optio tempora sed consequuntur maiores et.
                      Officiis, nesciunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeComment: id => dispatch(removeComment(id)),
  addNewComment: () => dispatch(addNewComment()),
  handleStepChange: stepNo => dispatch(handleStepChange(stepNo))
});

const mapStateToProps = state => {
  return {
    ...state.main
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
