import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import classnames from "classnames";
import CustomInputText from "../shared/CustomInputText/CustomInputText";
import M from "materialize-css";
import {
  addNewComment,
  removeComment,
  handleInputChange,
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
  componentDidMount() {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems);
  }

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
    const {
      stepNo,
      fName,
      lName,
      phoneNumber,
      faculty,
      yearOfStudy,
      email
    } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        {this.props && (
          <div>
            <div className="row">
              <div className="header-image col s12 m12 l12">
                <a
                  href="https://asii.ro/"
                  class="btn-floating btn-large waves-effect waves-light red asii-button"
                >
                  <img src="https://asii.ro/images/logo.png" alt="" />
                </a>
                <div class="slider fullscreen modify-size">
                  <ul class="slides">
                    <li>
                      <img src="https://asii.ro/images/background.jpg" alt="" />
                      <div class="caption center-align">
                        <h3>Nu lăsa studenția să treacă pe lângă tine!!</h3>
                        <h5 class="light grey-text text-lighten-3">
                          Asociația Studenților Informaticieni Ieşeni
                        </h5>
                      </div>
                    </li>
                    <li>
                      <img src="https://asii.ro/images/background.jpg" alt="" />
                      <div class="caption left-align">
                        <h3>Implicare</h3>
                        <h5 class="light grey-text text-lighten-3">
                          Căutăm sa găsim soluţii la problemele din jurul nostru
                        </h5>
                      </div>
                    </li>
                    <li>
                      <img src="https://asii.ro/images/background.jpg" alt="" />
                      <div class="caption right-align">
                        <h3>Perfecționare continua</h3>
                        <h5 class="light grey-text text-lighten-3">
                          Vrem sa învățăm în permanență lucruri noi în cadrul
                          training-urilor, proiectelor și numeroaselor
                          activități din cadrul asociației
                        </h5>
                      </div>
                    </li>
                    <li>
                      <img src="https://asii.ro/images/background.jpg" alt="" />
                      <div class="caption center-align">
                        <h3>Dezvoltare personală</h3>
                        <h5 class="light grey-text text-lighten-3">
                          Găsim moduri de a duce la bun sfarşit proiectele
                          noastre
                        </h5>
                      </div>
                    </li>
                    <li>
                      <img src="https://asii.ro/images/background.jpg" alt="" />
                      <div class="caption left-align">
                        <h3>Prietenie</h3>
                        <h5 class="light grey-text text-lighten-3">
                          Ne împrietenim, ne jucăm, ne distrăm și facem treaba
                          ca la carte! Here's our small slogan.
                        </h5>
                      </div>
                    </li>
                    <li>
                      <img src="https://asii.ro/images/background.jpg" alt="" />
                      <div class="caption right-align">
                        <h3>Organizare</h3>
                        <h5 class="light grey-text text-lighten-3">
                          Vrem să dobândim aptitudini noi și să le oferim mai
                          departe membrilor noi
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row center">
                <div className="register-form col s12  center">
                  <div className="nav-list-icons col s12 m12 l12">
                    <div className="container-for-btn">
                      <span className="tooltip-simple">Home</span>
                      <button
                        className={classnames("btn-nav-list", {
                          active: stepNo === "zero"
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
                          active: stepNo === "one"
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
                          active: stepNo === "three"
                        })}
                        onClick={() => this.handleStepChange("three")}
                      >
                        <i class="fas fa-search-location" />
                      </button>
                    </div>
                  </div>
                  <div />
                  <div
                    className={classnames(
                      "data-container z-depth-1 col s12 m12 l12",
                      { "step-one animated fadeIn": stepNo === "one" }
                    )}
                  >
                    <h3 class="header">Spune-ne despre tine</h3>
                    <h6>Cateva detalii esentiale despre tine</h6>
                    <div className="row">
                      <div className="col s12 m12 l4">
                        <CustomInputText
                          handleChange={this.handleInputChange}
                          iconCode="supervised_user_circle"
                          dataError="Name is not valid.Length must be at least 3 chars."
                          type="text"
                          min="3"
                          max="100"
                          name="fName"
                          id="fName"
                          value={fName}
                          label="First Name"
                        />
                      </div>
                      <div className="col s12 m12 l4">
                        <CustomInputText
                          handleChange={this.handleInputChange}
                          iconCode="account_circle"
                          dataError="Name is not valid.Length must be at least 3 chars."
                          type="text"
                          name="lName"
                          id="lName"
                          min="3"
                          max="100"
                          value={lName}
                          label="Last Name"
                        />
                      </div>
                      <div className="col s12 m12 l4">
                        <CustomInputText
                          handleChange={this.handleInputChange}
                          iconCode="email"
                          dataError="Email is not valid!"
                          type="email"
                          name="email"
                          min="3"
                          max="100"
                          id="emailId"
                          value={email}
                          label="Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m12 l4">
                        <CustomInputText
                          handleChange={this.handleInputChange}
                          iconCode="contact_phone"
                          dataError="Phone number invalid.Length must be 10 chars."
                          type="tel"
                          min="10"
                          max="10"
                          name="phoneNumber"
                          id="phoneNumber"
                          value={phoneNumber}
                          label="Phone Number"
                        />
                      </div>
                      <div className="col s12 m12 l4">
                        <CustomInputText
                          handleChange={this.handleInputChange}
                          iconCode="school"
                          dataError="Faculty is not valid"
                          type="text"
                          name="faculty"
                          min="3"
                          max="100"
                          id="faculty"
                          value={faculty}
                          label="Facultate"
                        />
                      </div>
                      <div className="col s12 m12 l4">
                        <CustomInputText
                          handleChange={this.handleInputChange}
                          iconCode="timelapse"
                          dataError="Name is not valid"
                          type="number"
                          min="1"
                          max="10"
                          name="yearOfStudy"
                          id="yearOfStudy"
                          value={yearOfStudy}
                          label="An de studiu"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s6 m6 l6">
                        <button
                          class="btn waves-effect waves-light red"
                          type="submit1"
                          name="action"
                        >
                          Inapoi
                          <i class="material-icons left">keyboard_arrow_left</i>
                        </button>
                      </div>
                      <div className="col s6 m6 l6">
                        <button
                          class="btn waves-effect waves-light red #d63734"
                          type="submit1"
                          name="action"
                        >
                          <i class="material-icons right">
                            keyboard_arrow_right
                          </i>
                          Inainte
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classnames(
                      "data-container z-depth-1 col s12 m12 l12",
                      { "step-zero animated fadeIn ": stepNo === "zero" }
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
  handleInputChange: objData => dispatch(handleInputChange(objData)),
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
