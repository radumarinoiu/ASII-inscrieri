import React, { Component, Fragment } from "react";
import classnames from "classnames";
import CustomButton from "../shared/CustomButton/CustomButton";

export default class ErrorSubmit extends Component {
  handleClick = _ => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Fragment>
        {this.props && (
          <div className="main normalView">
            <a
              className="asiiLogoLink"
              title="ASII Page"
              href="https://asii.ro/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="https://asii.ro/images/logo.png" alt="asii" />
            </a>
            <div className="row">
              <div className="header-image col s12 m12 l12">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/background1.png"
                  }
                  className="backgroundImage desktop"
                  alt=""
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/bgMobile.png"}
                  className="backgroundImage mobile"
                  alt=""
                />
              </div>
            </div>
            <div className="container absolut-zero ">
              <div className="row center">
                <div className="register-form col s12 m8 offset-m2 l8 offset-l2 xl6 offset-xl3 center">
                  <div
                    className={classnames(
                      "data-container col s12 m8 offset-m2 ",
                      {
                        "step-one finalStep": true
                      }
                    )}
                  >
                    <div className="container-body col s12">
                      <div className="row">
                        <div className="check-image-container col s12 m12 l12">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/CheckError.png"
                            }
                            className="checkImage"
                            alt=""
                          />
                        </div>
                        <div className="col s12 m12">
                          <img
                            className="asii-logo-right"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/error-submit.png"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="success-text">
                          <h2>eroare!</h2>
                          <p>
                            A aparut o eroare la trimiterea informatiilor.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-buttons step0 col s12 m12 l12 xl12">
                          <CustomButton
                            type="back"
                            title="Incearca din nou"
                            disable={false}
                            handleClick={this.handleClick}
                          />
                        </div>
                      </div>
                    </div>
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
