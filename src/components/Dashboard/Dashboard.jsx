import React, { Component, Fragment } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import "./Dashboard.scss";
import UserItem from "../shared/UserItem/UserItem";
import Comment from "../shared/Comment/Comment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import {
  getData,
  selectVolunteer,
  addCommentToVolunteer
} from "../../actions/adminActions";

class Dashboard extends Component {
  state = {
    searchText: "",
    filteredVolunteers: [...this.props.admin.volunteers],
    notSetup: true,
    departmentsSelected: [],
    hideDetails: true,
    hideUserList: false
  };

  componentDidMount() {
    this.props.getData();
  }
  componentWillReceiveProps() {
    console.log(this.props.admin.volunteers);
    this.setState({ filteredVolunteers: this.props.admin.volunteers });
  }

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
      // document.getElementById('hideView') && document.getElementById('hideView.')
      // document
      //   .getElementsByClassName("comments")[0]
      //   .lastElementChild.scrollIntoView(true);
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
    this.setState({ hideUserList: true });
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
    // const { hideUserList } = this.state;
    const { selectedVolunteer, volunteers, isLoading } = this.props.admin;
    if (isLoading) return <h1>ingis load</h1>;

    return (
      true && (
        <div className="row containerDashboard">
          <div
            className={classnames("leftMenu", {
              hideClass: this.state.hideUserList
            })}
          >
            <div
              className={classnames("filtersMeniu", {
                hideClass: !this.state.hideUserList
              })}
            >
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
                  <i className="material-icons prefix">search</i>

                  <input
                    value={this.state.searchText}
                    id="userSearch"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                  />
                  <label className="active" htmlFor="userSearch">
                    Cauta
                  </label>
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
          <div className="mainContainer 75min">
            {volunteers.map(volunteer => {
              if (volunteer._id === selectedVolunteer) {
                return (
                  <Fragment>
                    <div className="userHeaderInfo col s12">
                      <div className="userInfo-name">
                        <button
                          onClick={() => this.setState({ hideUserList: false })}
                          className="btnBack"
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <h4>{volunteer.name}</h4>
                        <span
                          className="showHideDetails"
                          onClick={() =>
                            this.setState({
                              hideDetails: !this.state.hideDetails
                            })
                          }
                        >
                          {this.state.hideDetails ? (
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
                            hide: this.state.hideDetails
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
                            return <Comment comment={com} />;
                          })
                        ) : (
                          <span className="noComments">Adauga comentarii</span>
                        )}
                        {/* <Comment />
                        <Comment />
                        <Comment />
                        <Comment /> */}
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
                        className="addCommentBtn"
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
      )
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  selectVolunteer: id => dispatch(selectVolunteer(id)),
  addCommentToVolunteer: comm => dispatch(addCommentToVolunteer(comm))
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
