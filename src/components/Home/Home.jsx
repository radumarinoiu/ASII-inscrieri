import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import classnames from "classnames";
import validator from "validator";
import CustomInputText from "../shared/CustomInputText/CustomInputText";
import CustomTextarea from "../shared/CustomTextarea/CustomTextarea";
import CustomButton from "../shared/CustomButton/CustomButton";
import CustomSelect from "../shared/CustomSelect/CustomSelect";
import CustomChipsComponent from "../shared/CustomChipsComponent/CustomChipsComponent";
import {
  addNewComment,
  removeComment,
  handleInputChange,
  handleStepChange,
  handleErrorChange,
  handleOptionChange,
  submitForm
} from "../../actions/mainActions";

class Home extends Component {
  updateSelectedDepartments = (department, operation) => {
    var selectedDepartments = [...this.props.selectedDepartments];

    if (operation === "add") {
      selectedDepartments.push(department);
    } else if (operation === "remove") {
      selectedDepartments = selectedDepartments.filter(e => e !== department);
    }
    this.props.handleInputChange(
      {
        name: "selectedDepartments",
        value: selectedDepartments
      },
      this.checkStepTwo
    );
  };

  toggleOptionDepartment = (department, state) => {
    let departments = Object.assign({}, this.props.departments);
    if (department in departments) departments[department].selected = state;
    if (departments[department].selected) {
      this.props.handleOptionChange({ name: "departments", departments }, () =>
        this.updateSelectedDepartments(department, "add")
      );
    } else {
      this.props.handleOptionChange({ name: "departments", departments }, () =>
        this.updateSelectedDepartments(department, "remove")
      );
    }
  };
  handleRemoveOption = e => {
    const department = e.currentTarget.name;
    this.toggleOptionDepartment(department, false);
  };

  checkStepZero = _ => {
    const {
      fName,
      lName,
      phoneNumber,
      faculty,
      yearOfStudy,
      email
    } = this.props.errors;

    if (
      fName === "OK" &&
      lName === "OK" &&
      phoneNumber === "OK" &&
      faculty === "OK" &&
      yearOfStudy === "OK" &&
      email === "OK"
    ) {
      this.props.handleInputChange({
        name: "stepZeroNextButton",
        value: true
      });
    } else {
      this.props.handleInputChange({
        name: "stepZeroNextButton",
        value: false
      });
    }
  };

  checkStepOne = _ => {
    const { description, bestQuality, whyASII } = this.props.errors;

    if (description === "OK" && bestQuality === "OK" && whyASII === "OK") {
      this.props.handleInputChange({
        name: "stepOneNextButton",
        value: true
      });
    } else {
      this.props.handleInputChange({
        name: "stepOneNextButton",
        value: false
      });
    }
  };
  checkStepTwo = _ => {
    const { descriptionOfDepartments, hoursPerWeek } = this.props.errors;

    if (
      descriptionOfDepartments === "OK" &&
      hoursPerWeek === "OK" &&
      this.props.selectedDepartments.length
    ) {
      this.props.handleInputChange({
        name: "stepTwoNextButton",
        value: true
      });
    } else {
      this.props.handleInputChange({
        name: "stepTwoNextButton",
        value: false
      });
    }
  };

  handleChange = e => {
    const department = e.target.value;
    // this.handleOnBlurChange(e);
    this.toggleOptionDepartment(department, true);
  };

  handleOnBlurChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "yearOfStudy": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Anul de studiu trebuie completat"
            },
            this.checkStepZero
          );
        } else if (value < 1 || value > 7) {
          this.props.handleErrorChange(
            {
              name,
              value: "Anul de studiu trebuie sa fie intre 1,7"
            },
            this.checkStepZero
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepZero
          );
        }

        break;
      }
      case "faculty": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Facultatea trebuie completata"
            },
            this.checkStepZero
          );
        } else if (!validator.isLength(value, { min: 3, max: undefined })) {
          this.props.handleErrorChange(
            {
              name,
              value: "Facultatea trebuie sa aiba minim 3 chars"
            },
            this.checkStepZero
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepZero
          );
        }

        break;
      }
      case "email": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Email-ul trebuie completat"
            },
            this.checkStepZero
          );
        } else if (!validator.isEmail(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Email-ul nu este valid!"
            },
            this.checkStepZero
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepZero
          );
        }

        break;
      }
      case "fName": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Numele trebuie completat"
            },
            this.checkStepZero
          );
        } else if (value.length < 3) {
          this.props.handleErrorChange(
            {
              name,
              value: "Numele trebuie sa contina minim 3 caractere!"
            },
            this.checkStepZero
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepZero
          );
        }

        break;
      }
      case "lName": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Prenumele trebuie completat"
            },
            this.checkStepZero
          );
        } else if (value.length < 3) {
          this.props.handleErrorChange(
            {
              name,
              value: "Prenumele trebuie sa aiba minim 3 caractere!"
            },
            this.checkStepZero
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepZero
          );
        }

        break;
      }
      case "phoneNumber": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Numarul de telefon trebuie completat"
            },
            this.checkStepZero
          );
        } else if (!validator.isMobilePhone(value, ["ro-RO"])) {
          this.props.handleErrorChange(
            {
              name,
              value: "Numarul de telefon nu este valid"
            },
            this.checkStepZero
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepZero
          );
        }

        break;
      }
      case "description": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Descrierea este necesara"
            },
            this.checkStepOne
          );
        } else if (!validator.isLength(value, { min: 60 })) {
          this.props.handleErrorChange(
            {
              name,
              value: "Hmm...Poti mai mult de atat.Minim 60 caractere!"
            },
            this.checkStepOne
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepOne
          );
        }
        break;
      }
      case "bestQuality": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Cea mai importanta calitate este necesara "
            },
            this.checkStepZero
          );
        } else if (!validator.isLength(value, { min: 2 })) {
          this.props.handleErrorChange(
            {
              name,
              value: "Hmm...Poti mai mult de atat!"
            },
            this.checkStepOne
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepOne
          );
        }
        break;
      }
      case "whyASII": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Vrem sa stim parerea ta.Te rog sa completezi."
            },
            this.checkStepZero
          );
        } else if (!validator.isLength(value, { min: 5 })) {
          this.props.handleErrorChange(
            {
              name,
              value: "Hmm...Poti mai mult de atat!"
            },
            this.checkStepOne
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepOne
          );
        }
        break;
      }
      case "descriptionOfDepartments": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Nu poti lasa necompletat"
            },
            this.checkStepZero
          );
        } else if (!validator.isLength(value, { min: 20 })) {
          this.props.handleErrorChange(
            {
              name,
              value: "Hmm...Poti mai mult de atat!Minim 20 caractere"
            },
            this.checkStepOne
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepTwo
          );
        }
        break;
      }
      case "hoursPerWeek": {
        if (validator.isEmpty(value)) {
          this.props.handleErrorChange(
            {
              name,
              value: "Este necesar sa stim cate ore poti aloca asociatiei"
            },
            this.checkStepTwo
          );
        } else if (value < 2) {
          this.props.handleErrorChange(
            {
              name,
              value: "Credem ca poti mai mult de atat"
            },
            this.checkStepTwo
          );
        } else {
          this.props.handleErrorChange(
            {
              name,
              value: "OK"
            },
            this.checkStepTwo
          );
        }

        break;
      }
      case "selectingDepartment": {
        if (!this.props.selectedDepartments.length) {
          this.props.handleErrorChange(
            {
              name: "selectingDepartment",
              value: "Trebuie sa alegi minim un departament"
            },
            this.checkStepTwo
          );
        } else {
          this.props.handleErrorChange(
            {
              name: "selectingDepartment",
              value: "OK"
            },
            this.checkStepTwo
          );
        }
        break;
      }

      default: {
        return 0;
      }
    }
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.handleOnBlurChange(e);
    this.props.handleInputChange({ name, value });
  };

  handleStepChange = stepNo => {
    this.props.handleStepChange(stepNo);
  };

  handleClick = e => {
    const btn = e.currentTarget.name;
    btn === "next"
      ? this.props.handleStepChange(this.props.stepNo + 1)
      : this.props.handleStepChange(this.props.stepNo - 1);
  };
  addNewComment = e => {
    e.preventDefault();
    const { fName, lName, subject, message } = this.props;
    if (fName !== "" && lName !== "" && subject !== "" && message !== "")
      this.props.addNewComment();
  };
  removeComment = e => {
    this.props.removeComment(e.target.id);
  };

  submitForm = _ => {
    this.props.submitForm(this.props);
  };
  render() {
    const {
      stepNo,
      fName,
      lName,
      phoneNumber,
      faculty,
      yearOfStudy,
      email,
      selectedDepartments,
      stepZeroNextButton,
      stepOneNextButton,
      stepTwoNextButton,
      description,
      bestQuality,
      whyASII,
      descriptionOfDepartments,
      departments,
      hoursPerWeek,
      errors
    } = this.props;
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
                      <h3 className="header">Spune-ne despre</h3>
                      <h3 className="header special ">
                        tine <i className="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l8 xl6">
                          <div className="col s12 m12 l12">
                            <CustomInputText
                              handleChange={this.handleInputChange}
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.fName}
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
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.lName}
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
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.email}
                              iconCode="email"
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
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.phoneNumber}
                              type="tel"
                              min="10"
                              max="15"
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
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.faculty}
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
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.yearOfStudy}
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
                          {stepZeroNextButton}
                          <CustomButton
                            disable={!stepZeroNextButton}
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
                      <h3 className="header">vrem sa te</h3>
                      <h3 className="header special ">
                        cunoastem <i className="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l8 xl6">
                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.description}
                              type="text"
                              min="3"
                              max="100"
                              name="description"
                              id="description"
                              value={description}
                              label="Descrie-te in minim 15 cuvinte"
                            />
                          </div>
                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.bestQuality}
                              type="text"
                              name="bestQuality"
                              id="bestQuality"
                              min="3"
                              max="100"
                              value={bestQuality}
                              label="Cea mai importanta calitate si de ce?"
                            />
                          </div>
                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.whyASII}
                              type="text"
                              name="whyASII"
                              min="3"
                              max="100"
                              id="whyASII"
                              value={whyASII}
                              label="De ce vrei sa te inscrii in ASII?"
                            />
                          </div>
                        </div>
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
                            title="Pasul Anterior"
                            disable={false}
                            handleClick={this.handleClick}
                          />
                          <CustomButton
                            disable={!stepOneNextButton}
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
                      <h3 className="header">Spune-ne despre</h3>
                      <h3 className="header special ">
                        tine <i className="fas fa-smile-beam" />
                      </h3>
                      <div className="row">
                        <div className="col s12 m12 l8 xl6">
                          <div className="col s12 m12 l12">
                            <CustomSelect
                              selectedDepartments={selectedDepartments}
                              handleChange={this.handleChange}
                              name="selectingDepartment"
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.selectingDepartment}
                              departments={departments}
                              label="Selecteaza departamentele la care vrei sa aplici (Maxim 2 departamente)"
                            />
                          </div>

                          <div className="col s12 m12 l12">
                            {selectedDepartments.length ? (
                              <CustomChipsComponent
                                handleRemoveOption={this.handleRemoveOption}
                                label="Departamentele selectate: (In ordinea preferintelor)"
                                departments={departments}
                                selectedDepartments={
                                  this.props.selectedDepartments
                                }
                              />
                            ) : null}
                          </div>

                          <div className="col s12 m12 l12">
                            <CustomTextarea
                              handleChange={this.handleInputChange}
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.descriptionOfDepartments}
                              type="text"
                              min="3"
                              max="100"
                              name="descriptionOfDepartments"
                              id="descriptionOfDepartments"
                              value={descriptionOfDepartments}
                              label="Cu ce se ocupa departamentul/ele la care ai aplicat?"
                            />
                          </div>
                          <div className="col s12 m12 l12">
                            <CustomInputText
                              handleChange={this.handleInputChange}
                              handleOnBlur={this.handleOnBlurChange}
                              dataError={errors.hoursPerWeek}
                              type="text"
                              name="hoursPerWeek"
                              id="hoursPerWeek"
                              min="2"
                              max="100"
                              value={hoursPerWeek}
                              label="Cate ore pe saptamana poti acorda asociatiei?"
                              placeholder="1,1,2,3,5,8,13,21..."
                            />
                          </div>
                        </div>
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
                            title="Pasul Anterior"
                            disable={false}
                            handleClick={this.handleClick}
                          />
                          <CustomButton
                            type="send"
                            disable={!stepTwoNextButton}
                            handleClick={this.submitForm}
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
  handleInputChange: (objData, callback = () => null) =>
    dispatch(handleInputChange(objData)).then(() => callback()),
  addNewComment: () => dispatch(addNewComment()),
  handleStepChange: stepNo => dispatch(handleStepChange(stepNo)),
  handleErrorChange: (errorType, callback) =>
    dispatch(handleErrorChange(errorType)).then(() => callback()),
  handleOptionChange: (objData, callback) =>
    dispatch(handleOptionChange(objData)).then(() => callback()),
  submitForm: props => dispatch(submitForm(props))
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
