import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import classnames from "classnames";
import M from "materialize-css";
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
    const { stepNo } = this.props;
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
