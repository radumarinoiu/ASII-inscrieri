import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import classnames from "classnames";
import CustomInputText from "../shared/CustomInputText/CustomInputText";
import CustomTextarea from "../shared/CustomTextarea/CustomTextarea";
import CustomButton from "../shared/CustomButton/CustomButton";
import CustomSelect from "../shared/CustomSelect/CustomSelect";
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

  handleClick = e => {
    const btn = e.currentTarget.name;
    btn === "next"
      ? this.props.handleStepChange(this.props.stepNo + 1)
      : this.props.handleStepChange(this.props.stepNo - 1);
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
          <div className="main">
            <div className="row">
              <div className="header-image col s12 m12 l12">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/background1.png"
                  }
                  class="backgroundImage desktop"
                  alt=""
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/bgMobile.png"}
                  class="backgroundImage mobile"
                  alt=""
                />
              </div>
            </div>
            <div className="container absolut-zero ">
              <div className="row center">
                <div className="register-form col s12 m8 offset-m2 l8 offset-l2 xl6 offset-xl3 center">
                  <div
                    className={classnames("data-container col s12 m12 l12", {
                      "step-one animated fadeIn": stepNo === 0
                    })}
                  >
                    <div className="container-header-status col 12">
                      <img
                        className="progress-bar-desktop"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/Stepper" +
                          this.props.stepNo +
                          ".png"
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
                            "/assets/images/Stepper" +
                            this.props.stepNo +
                            "M@2x.png"
                          }
                          alt=""
                        />
                      </div>
                      <h3 class="header">Spune-ne despre</h3>
                      <h3 class="header special ">
                        tine <i class="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l8 xl6">
                          <div className="col s12 m12 l12">
                            <CustomInputText
                              handleChange={this.handleInputChange}
                              iconCode="supervised_user_circle"
                              dataError="Name is not valid.Length must be at least 3 chars."
                              type="text"
                              min="3"
                              max="100"
                              name="fName"
                              id="fName"
                              placeholder="Nume"
                              value={fName}
                              label="Nume"
                            />
                          </div>
                          <div className="col s12 m12 l12">
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
                              label="Prenume"
                              placeholder="Prenume"
                            />
                          </div>
                          <div className="col s12 m12 l12">
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
                              placeholder="yourawesomeemail@gmail.com"
                            />
                          </div>
                          <div className="col s12 m12 l12">
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
                              placeholder="07xx"
                            />
                          </div>
                          <div className="col s12 m12 l12">
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
                              placeholder="Informatica"
                            />
                          </div>
                          <div className="col s12 m12 l12">
                            <CustomInputText
                              handleChange={this.handleInputChange}
                              iconCode="timelapse"
                              dataError="Name is not valid"
                              type="number"
                              min="1"
                              max="7"
                              name="yearOfStudy"
                              id="yearOfStudy"
                              value={yearOfStudy}
                              label="An de studiu"
                              placeholder="1"
                            />
                          </div>
                        </div>
                        <div className="col s12 m12 l4 xl6">
                          <img
                            class="asii-logo-right"
                            s="asii-logo-right"
                            src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-buttons step0 col s12 m12 l12 xl12">
                          <CustomButton
                            disable={false}
                            handleClick={this.handleClick}
                          />
                          {/* <CustomButton /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classnames("data-container col s12 m12 l12", {
                      "step-one animated fadeIn": stepNo === 1
                    })}
                  >
                    <div className="container-header-status col 12">
                      <img
                        className="progress-bar-desktop"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/Stepper" +
                          this.props.stepNo +
                          ".png"
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
                            "/assets/images/Stepper" +
                            this.props.stepNo +
                            "M@2x.png"
                          }
                          alt=""
                        />
                      </div>
                      <h3 class="header">vrem sa te</h3>
                      <h3 class="header special ">
                        cunoastem <i class="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l8 xl6">
                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              dataError="Name is not valid.Length must be at least 3 chars."
                              type="text"
                              min="3"
                              max="100"
                              name="fName"
                              id="fName"
                              value={fName}
                              label="Descrie-te in minim 15 cuvinte"
                            />
                          </div>
                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              dataError="Name is not valid.Length must be at least 3 chars."
                              type="text"
                              name="lName"
                              id="lName"
                              min="3"
                              max="100"
                              value={lName}
                              label="Cea mai importanta calitate si de ce?"
                            />
                          </div>
                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              dataError="Email is not valid!"
                              type="text"
                              name="email"
                              min="3"
                              max="100"
                              id="emailId"
                              value={email}
                              label="De ce vrei sa te inscrii in ASII?"
                            />
                          </div>
                        </div>
                        <div className="col s12 m12 l4 xl6">
                          <img
                            class="asii-logo-right"
                            src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-buttons step0 col s12 m12 l12 xl12">
                          <CustomButton
                            type="back"
                            disable={false}
                            handleClick={this.handleClick}
                          />
                          <CustomButton
                            disable={false}
                            handleClick={this.handleClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classnames("data-container col s12 m12 l12", {
                      "step-one animated fadeIn": stepNo === 2
                    })}
                  >
                    <div className="container-header-status col 12">
                      <img
                        className="progress-bar-desktop"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/Stepper" +
                          this.props.stepNo +
                          ".png"
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
                            "/assets/images/Stepper" +
                            this.props.stepNo +
                            "M@2x.png"
                          }
                          alt=""
                        />
                      </div>
                      <h3 class="header">Spune-ne despre</h3>
                      <h3 class="header special ">
                        tine <i class="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l8 xl6">
                          <div className="col s12 m12 l12">
                            <CustomSelect label="Selecteaza departamentele la care vrei sa aplici (Maxim 2 departamente)" />
                          </div>
                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              dataError="Name is not valid.Length must be at least 3 chars."
                              type="text"
                              min="3"
                              max="100"
                              name="fName"
                              id="fName"
                              placeholder="Nume"
                              value={fName}
                              label="Cu ce se ocupa departamentul la care ai aplicat?"
                            />
                          </div>
                          <div className="col s12 m12 l12">
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
                              label="Cate ore pe saptamana poti acorda asociatiei?"
                              placeholder="Prenume"
                            />
                          </div>
                        </div>
                        <div className="col s12 m12 l4 xl6">
                          <img
                            class="asii-logo-right"
                            src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-buttons step0 col s12 m12 l12 xl12">
                          <CustomButton
                            type="back"
                            disable={false}
                            handleClick={this.handleClick}
                          />
                          {/* <CustomButton /> */}
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
