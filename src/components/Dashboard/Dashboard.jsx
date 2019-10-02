import React, { Component, Fragment } from "react";
import "./Dashboard.scss";
import UserItem from "../shared/UserItem/UserItem";
import Comment from "../shared/Comment/Comment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import CustomInputText from "../shared/CustomInputText/CustomInputText";
import {
  getData,
  selectVolunteer,
  addCommentToVolunteer,
  setStatus,
  setListOfFilteredUsers
} from "../../actions/adminActions";
import { authenticate } from "../../actions/authActions";
class Dashboard extends Component {
  state = {
    searchText: "",
    filteredVolunteers: [...this.props.admin.volunteers],
    notSetup: true,
    departmentsSelected: [],
    hideDetails: true,
    hideDetailsResponses: true,
    hideUserList: false,
    selectedVolunteerObjectStatus: {
      status: ""
    }
  };

  componentWillMount() {
    const token = window.sessionStorage.token;
    if (!token) {
      this.props.history.push("/login");
    } else this.props.authenticate();
  }

  componentDidMount() {
    this.props.getData();
  }

  componentWillReceiveProps() {
    for (let i in this.props.admin.volunteers) {
      if (
        this.props.admin.volunteers[i]._id ===
        this.props.admin.selectedVolunteer
      ) {
        this.setState({
          selectedVolunteerObjectStatus: {
            status: this.props.admin.volunteers[i].status
          }
        });
      }
    }
  }

  handleChangeStatus = (status, id) => {
    this.props.setStatus(status, id);
  };

  handleCheckbox = e => {
    const id = e.target.id;
    let departmentsSelected = this.state.departmentsSelected;
    if (!departmentsSelected.includes(id)) {
      departmentsSelected.push(id);
    } else if (departmentsSelected.includes(id)) {
      departmentsSelected.splice(departmentsSelected.indexOf(id), 1);
    }
    this.setState({ departmentsSelected });
    let filteredVolunteers = this.filterByDepartment(
      this.props.admin.volunteers,
      departmentsSelected
    );
    filteredVolunteers = this.filterByString(
      filteredVolunteers,
      this.state.searchText
    );
    this.props.setListOfFilteredUsers(filteredVolunteers);
    // this.setState({ filteredVolunteers });
  };

  handleKeyDown = e => {
    if (e.target.id === "commentAdd") {
      if (e.key === "Enter") {
        this.addCommentToVolunteer();
      }
    } else if ((e.key = "Backspace")) {
      this.handleChange(e);
    }
  };

  filterByString = (arr, text) => {
    return arr.filter(el => {
      if (el.name) {
        let lowerName = el.name;
        lowerName = lowerName.toLowerCase();
        return lowerName.includes(text.toLowerCase());
      }
      return false;
    });
  };

  filterByDepartment = (arr, arrOfDep) => {
    return arr.filter(el => {
      if (el.departments.length !== 0 && el.departments !== []) {
        let ok = true;
        arrOfDep.map((dep, index) => {
          if (el.selectedDepartments.length) {
            ok = el.selectedDepartments.findIndex(item => item === dep) === index;
          } else if (!el.departments[dep].selected) {
            ok = false;
          }
          return null;
        });
        return ok;
      } else {
        return false;
      }
    });
  };

  handleChange = e => {
    if (e.target.value) {
      let filteredVolunteers = this.filterByDepartment(
        this.props.admin.volunteers,
        this.state.departmentsSelected
      );
      filteredVolunteers = this.filterByString(
        filteredVolunteers,
        e.target.value
      );
      this.props.setListOfFilteredUsers(filteredVolunteers);
      this.setState({
        searchText: e.target.value
      });
    } else {
      let filteredVolunteers = this.filterByDepartment(
        this.props.admin.volunteers,
        this.state.departmentsSelected
      );
      this.props.setListOfFilteredUsers(filteredVolunteers);
      this.setState({
        searchText: e.target.value
      });
    }
  };

  handleClick = id => {
    this.setState({ hideUserList: true, hideDetailsResponses: true });
    this.props.selectVolunteer(id);
  };

  addCommentToVolunteer = _ => {
    const value = this.state.textareaValue;
    const currentDate = new Date();
    const id = this.props.admin.selectedVolunteer;
    this.setState({ textareaValue: "" });

    this.props.admin.volunteers.map(volunteer => {
      if (volunteer._id === id) {
        let comments = volunteer.comments;
        comments.unshift({ value, currentDate });

        this.props.admin.volunteers.comments = comments;
        this.props.addCommentToVolunteer({ id, comments });
      }
      return null;
    });
  };
  render() {
    const { selectedVolunteer, volunteers, isLoading } = this.props.admin;
    if (this.props.admin.volunteers) {
      let j = 0;
      for (let i in volunteers) {
        if (volunteers[i._id === selectVolunteer]) j = i;
      }
      let newVol = Object.assign({}, volunteers[j]);
      return (
        <Fragment>
          <div className={classnames("row containerDashboard")}>
            <div className="containerDefault">
              <div
                id="leftM"
                className={classnames("leftMenu 25min", {
                  hideClass: this.state.hideUserList
                })}
              >
                <div className="filtersMeniu">
                  <div className="filtersHeader shadow1">
                    <h2>Filtre</h2>
                    <h2>{this.props.admin.filteredUsers.length}</h2>
                  </div>
                  <div className="filterZone">
                    <div className="checkbox-container">
                      <label className="checkbox-label">
                        <input
                          id="PRO"
                          type="checkbox"
                          checked={this.state.departmentsSelected.includes(
                            "PRO"
                          )}
                          onChange={this.handleCheckbox}
                        />
                        <span className="checkbox-custom rectangular"></span>
                      </label>
                      <div className="input-title">PRO</div>
                    </div>
                    <div className="checkbox-container">
                      <label className="checkbox-label">
                        <input
                          id="PR&MEDIA"
                          checked={this.state.departmentsSelected.includes(
                            "PR&MEDIA"
                          )}
                          type="checkbox"
                          onChange={this.handleCheckbox}
                        />
                        <span className="checkbox-custom rectangular"></span>
                      </label>
                      <div className="input-title">PR&MEDIA</div>
                    </div>
                    <div className="checkbox-container">
                      <label className="checkbox-label">
                        <input
                          id="RE"
                          type="checkbox"
                          checked={this.state.departmentsSelected.includes(
                            "RE"
                          )}
                          onChange={this.handleCheckbox}
                        />
                        <span className="checkbox-custom rectangular"></span>
                      </label>
                      <div className="input-title">RE</div>
                    </div>
                    <div className="checkbox-container">
                      <label className="checkbox-label">
                        <input
                          id="RI"
                          type="checkbox"
                          checked={this.state.departmentsSelected.includes(
                            "RI"
                          )}
                          onChange={this.handleCheckbox}
                        />
                        <span className="checkbox-custom rectangular"></span>
                      </label>
                      <div className="input-title">RI</div>
                    </div>
                    <div className="checkbox-container">
                      <label className="checkbox-label">
                        <input
                          id="IT"
                          onChange={this.handleCheckbox}
                          checked={this.state.departmentsSelected.includes(
                            "IT"
                          )}
                          type="checkbox"
                        />
                        <span className="checkbox-custom rectangular"></span>
                      </label>
                      <div htmlFor="IT" className="input-title">
                        IT
                      </div>
                    </div>
                  </div>
                </div>
                <div className="searchZone">
                  <div className="row">
                    <div className="input-field col s12">
                      <div className="col s12 m12 l12">
                        <CustomInputText
                          handleChange={this.handleChange}
                          type="text"
                          min="3"
                          max="100"
                          name="search"
                          id="userSearch"
                          placeholder="Cauta.."
                          value={this.state.searchText}
                          label="Cauta dupa nume"
                        />
                      </div>
                      {/* <input
                      value={this.state.searchText}
                      id="userSearch"
                      type="text"
                      className="validate"
                      onChange={this.handleChange}
                      placeholder="Cauta.."
                      onKeyDown={this.handleKeyDown}
                    /> */}
                    </div>
                  </div>
                </div>
                <div className="usersList">
                  {this.props.admin.filteredUsers !== [] &&
                    this.props.admin.filteredUsers.map(volunteer => (
                      <UserItem
                        key={volunteer._id}
                        activeID={selectedVolunteer}
                        handleClick={this.handleClick}
                        volunteer={volunteer}
                      />
                    ))}
                </div>
              </div>
              <div
                className={classnames("mainContainer 75min", {
                  hideClass: !this.state.hideUserList,
                  accepted: newVol.status === "accepted",
                  denided: newVol.status === "denided",
                  maybe: newVol.status === "maybe"
                })}
              >
                {volunteers.map((volunteer, index) => {
                  if (volunteer._id === selectedVolunteer) {
                    return (
                      <Fragment key={index + "f"}>
                        <div className="userHeaderInfo col s12">
                          <div className="userInfo-name">
                            <button
                              onClick={() =>
                                this.setState({ hideUserList: false })
                              }
                              className="btnBack"
                            >
                              <i className="fas fa-chevron-left"></i>
                            </button>
                            <h4>{volunteer.name}</h4>
                            <div className="decisionButtons">
                              <button
                                onClick={_ =>
                                  this.handleChangeStatus(
                                    "accepted",
                                    selectedVolunteer
                                  )
                                }
                                className={classnames("buttonNormal accept", {
                                  // active: true
                                  active: volunteer.status === "accepted"
                                })}
                              >
                                Anuntat
                              </button>

                              <button
                                onClick={_ =>
                                  this.handleChangeStatus(
                                    "denided",
                                    selectedVolunteer
                                  )
                                }
                                className={classnames("buttonNormal denided", {
                                  active: volunteer.status === "denided"
                                })}
                              >
                                Nu vine
                              </button>

                              <button
                                onClick={_ =>
                                  this.handleChangeStatus(
                                    "maybe",
                                    selectedVolunteer
                                  )
                                }
                                className={classnames("buttonNormal maybe", {
                                  active: volunteer.status === "maybe"
                                })}
                              >
                                Poate
                              </button>
                            </div>
                            <div
                              className="showHideDetails"
                              onClick={() =>
                                this.setState({
                                  hideDetailsResponses: !this.state
                                    .hideDetailsResponses
                                })
                              }
                            >
                              
                            </div>
                          </div>
                          <div
                            className={classnames("userInfo-responses ", {
                              hideDetailsResponses: false
                            })}
                          >
                            <div className="responsesContainer">
                              <div className="response col l12">
                                <span>Email:</span>
                                <p>{volunteer.email}</p>
                              </div>
                              <div className="response col l12">
                                <span>Telefon:</span>
                                <p>{volunteer.phoneNumber}</p>
                              </div>
                              <div className="response col l12">
                                <span>Facultate si an de studiu:</span>
                                <p>{volunteer.faculty}</p>
                              </div>
                              <div className="response col l12">
                                <span>Descriete in minim 15 cuvinte:</span>
                                <p>{volunteer.description}</p>
                              </div>
                              <div className="response col l12">
                                <span>
                                  Cea mai importanta calitate si de ce?
                                </span>
                                <p>{volunteer.bestQuality}</p>
                              </div>
                              <div className="response col l12">
                                <span>De ce vrei sa te inscrii in ASII?</span>
                                <p>{volunteer.whyASII}</p>
                              </div>
                              <div className="response col l12">
                                <span>
                                  Cate ore pe saptamana poti acorda asociatiei?
                                </span>
                                <p>{volunteer.hoursPerWeek}</p>
                              </div>
                              {Object.entries(volunteer.departments).map(
                                ([key, value]) => {
                                  if (value.selected) {
                                    return value.questions.map((q, index) => {
                                      return (
                                        <Fragment>
                                          <div className="response col l12">
                                            <span>
                                              {key}:{index + 1}.{q.title}
                                            </span>
                                            <pre>{q.answer}</pre>
                                          </div>
                                        </Fragment>
                                      );
                                    });
                                  }
                                  return null;
                                }
                              )}
                            </div>
                          </div>
                          <div className="comments">
                            {volunteer.comments ? (
                              volunteer.comments.map((com, index) => {
                                return (
                                  <Comment
                                    key={index}
                                    volunteer={volunteer}
                                    comment={com}
                                  />
                                );
                              })
                            ) : (
                              <span className="noComments">
                                Adauga comentarii
                              </span>
                            )}
                          </div>
                        </div>
                        {/* <div className="inputComments col s12">
                          <textarea
                            id="commentAdd"
                            type="text"
                            onChange={e =>
                              this.setState({ textareaValue: e.target.value })
                            }
                            value={this.state.textareaValue}
                            onKeyDown={this.handleKeyDown}
                          ></textarea>
                          <button
                            onClick={this.addCommentToVolunteer}
                            className={classnames("addCommentBtn", {
                              accepted: volunteer.status === "accepted",
                              denided: volunteer.status === "denided",
                              maybe: volunteer.status === "maybe"
                            })}
                          >
                            Adauga
                          </button>
                        </div> */}
                      </Fragment>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            <div
              className={classnames("loader", {
                show: isLoading
              })}
            >
              <div className="loaderBody rotating"></div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  authenticate: () => dispatch(authenticate()),
  getData: () => dispatch(getData()),
  selectVolunteer: id => dispatch(selectVolunteer(id)),
  setListOfFilteredUsers: list => dispatch(setListOfFilteredUsers(list)),
  addCommentToVolunteer: comm => dispatch(addCommentToVolunteer(comm)),
  setStatus: (status, id) => dispatch(setStatus(status, id))
  // handleInputChange: (objData, callback = () => null) =>
  //   dispatch(handleInputChange(objData)).then(() => callback()),
});
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
