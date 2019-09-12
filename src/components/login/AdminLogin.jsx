import React, { Component } from "react";
import styles from "./AdminLogin.module.scss";
import CustomInputText from "../shared/CustomInputText/CustomInputText";
import CustomTextarea from "../shared/CustomTextarea/CustomTextarea";
import CustomButton from "../shared/CustomButton/CustomButton";

export default class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      },
      auth: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.email === "admin@asii.ro" &&
      this.state.password === "asii2019"
    ) {
      this.setState({
        auth: true
      });
      window.location.replace("/dashboard");
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="main">
          <a
            className="asiiLogoLink"
            title="ASII Page"
            href="https://asii.ro/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="https://asii.ro/images/logo.png" alt="asii" />
          </a>
          <div onSubmit={this.handleSubmit}>
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
                    className="data-container col s12 m12 l12"
                    style={{ display: "block" }}
                    ref={divElement => (this.divElement = divElement)}
                  >
                    <div className="container-body col s12">
                      <h3 className="header">Intra in</h3>
                      <h3 className="header special ">
                        cont <i className="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l8 xl6">
                          <div className="col s12 m12 l12">
                            <CustomInputText
                              handleChange={event => this.handleChange(event)}
                              dataError={this.state.errors.email}
                              type="text"
                              min="3"
                              max="100"
                              name="email"
                              id="email"
                              placeholder="admin@asii.ro"
                              value={this.state.email}
                              label="Email"
                            />
                          </div>

                          <div className="col s12 m12 l12">
                            <CustomInputText
                              handleChange={event => this.handleChange(event)}
                              dataError={this.state.errors.password}
                              type="password"
                              name="password"
                              min="3"
                              max="100"
                              id="password"
                              value={this.state.password}
                              label="Password"
                              placeholder="asii2019"
                            />
                          </div>
                        </div>
                        <div className="col s12 m12 l4 xl6">
                          <img
                            className="asii-logo-right"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/card1@2x.png"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-buttons step0 col s12 m12 l12 xl12">
                          <CustomButton
                            title="Intra in cont"
                            disable={false}
                            type="submit"
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
        </div>
      </form>
    );
  }
}
