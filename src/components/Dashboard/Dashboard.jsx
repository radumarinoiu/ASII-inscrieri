import React, { Component, Fragment } from "react";
import "./Dashboard.scss";
import UserItem from "../shared/UserItem/UserItem";
import Comment from "../shared/Comment/Comment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import * as _ from "lodash";
import {
  getData,
  selectVolunteer,
  addCommentToVolunteer,
  setStatus
} from "../../actions/adminActions";

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

  componentDidMount() {
    this.props.getData();
  }
  componentWillReceiveProps() {
    this.setState({ filteredVolunteers: this.props.admin.volunteers });
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
    // alert(status);
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

    this.setState({ filteredVolunteers });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.addCommentToVolunteer();
      document.getElementById("commentAdd").value = "";
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
        // console.log("el", el);
        arrOfDep.map(dep => {
          if (!el.departments[dep].selected) {
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
      filteredVolunteers = this.filterByString(
        filteredVolunteers,
        this.state.searchText
      );
      this.setState({
        filteredVolunteers,
        searchText: e.target.value
      });
    } else {
      this.setState({
        filteredVolunteers: this.props.admin.volunteers,
        searchText: e.target.value
      });
    }
  };

  handleClick = id => {
    this.setState({ hideUserList: true, hideDetailsResponses: true });
    this.props.selectVolunteer(id);
  };

  addCommentToVolunteer = _ => {
    let textareaField = document.getElementById("commentAdd");
    const value = textareaField.value;
    const currentDate = new Date();
    const id = this.props.admin.selectedVolunteer;
    this.props.admin.volunteers.map(volunteer => {
      if (volunteer._id === id) {
        let comments = volunteer.comments;
        comments.unshift({ value, currentDate });

        this.props.admin.volunteers.comments = comments;
        this.props.addCommentToVolunteer({ id, comments });
      }
      return null;
    });
    textareaField.value = "";
  };
  render() {
    const { selectedVolunteer, volunteers, isLoading } = this.props.admin;
    // if (isLoading) return <h1>ingis load</h1>;

    if (this.props.admin.volunteers) {
      let j = 0;
      for (let i in volunteers) {
        if (volunteers[i._id === selectVolunteer]) j = i;
      }
      let newVol = Object.assign({}, volunteers[j]);
      return (
        <Fragment>
          <div className={classnames("row containerDashboard")}>
            <div
              id="leftM"
              className={classnames("leftMenu 25min", {
                hideClass: this.state.hideUserList
              })}
            >
              <div className="filtersMeniu">
                <div className="filtersHeader shadow1">
                  <h2>Filtre</h2>
                  <span>
                    <i className="fas fa-sort-down"></i>
                  </span>
                </div>

                <div className="filterZone">
                  <label>
                    <input
                      id="IT"
                      onClick={this.handleCheckbox}
                      type="checkbox"
                    />
                    <span htmlFor="IT">IT</span>
                  </label>
                  <label>
                    <input
                      id="RI"
                      type="checkbox"
                      onClick={this.handleCheckbox}
                    />
                    <span htmlFor="RI">RI</span>
                  </label>
                  <label>
                    <input
                      id="RE"
                      type="checkbox"
                      onClick={this.handleCheckbox}
                    />
                    <span htmlFor="RE">RE</span>
                  </label>
                  <label>
                    <input
                      id="PR&MEDIA"
                      type="checkbox"
                      onClick={this.handleCheckbox}
                    />
                    <span htmlFor="PR&MEDIA">PR&MEDIA</span>
                  </label>

                  <label>
                    <input
                      id="PRO"
                      type="checkbox"
                      onClick={this.handleCheckbox}
                    />
                    <span htmlFor="PRO">PRO</span>
                  </label>
                </div>
              </div>
              <div className="searchZone">
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      value={this.state.searchText}
                      id="userSearch"
                      type="text"
                      className="validate"
                      onChange={this.handleChange}
                      placeholder="Cauta.."
                    />
                  </div>
                </div>
              </div>
              <div className="usersList">
                {this.state.filteredVolunteers !== [] &&
                  this.state.filteredVolunteers.map(volunteer => (
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
              if="mainM"
              className={classnames("mainContainer 75min", {
                hideClass: !this.state.hideUserList,
                accepted: newVol.status === "accepted",
                denided: newVol.status === "denided",
                maybe: newVol.status === "maybe"
              })}
            >
              {volunteers.map(volunteer => {
                if (volunteer._id === selectedVolunteer) {
                  return (
                    <Fragment>
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
                              Acceptat
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
                              Respins
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
                          <span
                            className="showHideDetails"
                            onClick={() =>
                              this.setState({
                                hideDetailsResponses: !this.state
                                  .hideDetailsResponses
                              })
                            }
                          >
                            {this.state.hideDetailsResponses ? (
                              <i className="fas fa-chevron-down"></i>
                            ) : (
                              <i className="fas fa-chevron-up"></i>
                            )}
                          </span>
                        </div>
                        <div
                          className={classnames(
                            "userInfo-responses col s12 m12 l9",
                            {
                              hideDetailsResponses: this.state
                                .hideDetailsResponses
                            }
                          )}
                        >
                          <div className="response col s12 m6 l6">
                            <span>Email:</span>
                            <p>{volunteer.email}</p>
                          </div>
                          <div className="response col s12 m6 l6">
                            <span>Telefon:</span>
                            <p>{volunteer.phoneNumber}</p>
                          </div>
                          <div className="response col s12 m6 l6">
                            <span>Facultate si an de studiu:</span>
                            <p>{volunteer.faculty}</p>
                          </div>
                          <div className="response col s12 m6 l6">
                            <span>Descriete in minim 15 cuvinte:</span>
                            <p>{volunteer.description}</p>
                          </div>
                          <div className="response col s12 m6 l6">
                            <span>Cea mai importanta calitate si de ce?</span>
                            <p>{volunteer.bestQuality}</p>
                          </div>
                          <div className="response col s12 m6 l6">
                            <span>De ce vrei sa te inscrii in ASII?</span>
                            <p>{volunteer.whyASII}</p>
                          </div>
                          <div className="response col s12 m6 l6">
                            <span>
                              Cate ore pe saptamana poti acorda asociatiei?
                            </span>
                            <p>{volunteer.hoursPerweek}</p>
                          </div>
                          {Object.entries(volunteer.departments).map(
                            ([key, value]) => {
                              if (value.selected) {
                                return value.questions.map((q, index) => {
                                  return (
                                    <Fragment>
                                      <div className="response col s12 m6 l6">
                                        <span>
                                          {key}:{index + 1}.{q.title}
                                        </span>
                                        <p>{q.answer}</p>
                                      </div>
                                    </Fragment>
                                  );
                                });
                              }
                              return null;
                            }
                          )}
                        </div>
                        <div className="comments">
                          {volunteer.comments ? (
                            volunteer.comments.map(com => {
                              return (
                                <Comment volunteer={volunteer} comment={com} />
                              );
                            })
                          ) : (
                            <span className="noComments">
                              Adauga comentarii
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="inputComments col s12">
                        <textarea
                          id="commentAdd"
                          type="text"
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
                      </div>
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
        </Fragment>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  selectVolunteer: id => dispatch(selectVolunteer(id)),
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
