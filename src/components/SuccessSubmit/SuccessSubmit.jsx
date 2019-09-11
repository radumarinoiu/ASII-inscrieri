import React, { Component, Fragment } from "react";
import classnames from "classnames";
import CustomButton from "../shared/CustomButton/CustomButton";

export default class SuccessSubmit extends Component {
  handleClick = _ => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Fragment>
        {this.props && (
          <div className="main">
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
                    className={classnames("data-container col s12 m12 l12", {
                      "step-one animated fadeIn": true
                    })}
                  >
                    <div className="container-header-status col 12">
                      <img
                        className="progress-bar-desktop"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/Stepper2.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="container-body col s12">
                      <div className="container-header-status col 12">
                        <img
                          className="progress-bar-mobile"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/Stepper2.png"
                          }
                          alt=""
                        />
                      </div>
                      <h3 className="header">Mulțumim pentru</h3>
                      <h3 className="header special ">
                        înscriere <i className="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l4 xl6">
                          <img
                            className="asii-logo-right"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/card" +
                              this.props.stepNo +
                              "@2x.png"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-buttons step0 col s12 m12 l12 xl12">
                          <CustomButton
                            type="back"
                            title="Prima pagină"
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
