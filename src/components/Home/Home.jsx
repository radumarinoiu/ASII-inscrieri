import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  handleInputChange,
  addNewComment,
  removeComment
} from "../../actions/mainActions";

class Home extends Component {
  handleInputChange = e => {
    this.props.handleInputChange({
      name: e.target.name,
      value: e.target.value
    });
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
    const { comments } = this.props;
    return (
      <Fragment>
        {this.props && (
          <div className="container ">
            <div className="row s8 offset-s2">
              <form action="" onSubmit={this.addNewComment} className="col s8 offset-s2 red-text">
                <div className="header col s12 center darken-1-text">
                  <h2>Add Comment</h2>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      type="text"
                      onChange={this.handleInputChange}
                      id="fName"
                      value={this.props.fName}
                      name="fName"
                      className="validate"
                    />
                    <label htmlFor="fName">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      type="text"
                      onChange={this.handleInputChange}
                      id="lName"
                      value={this.props.lName}
                      name="lName"
                      className="validate"
                    />
                    <label htmlFor="lName">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i class="material-icons prefix">chrome_reader_mode</i>
                    <input
                      type="text"
                      id="subject"
                      onChange={this.handleInputChange}
                      name="subject"
                      value={this.props.subject}
                      className="validate"
                    />
                    <label htmlFor="subject">Subject Here</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i class="material-icons prefix">chrome_reader_mode</i>
                    <textarea
                      id="message"
                      onChange={this.handleInputChange}
                      name="message"
                      cols="30"
                      value={this.props.message}
                      rows="10"
                      className="materialize-textarea"
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="row center">
                  <button
                    onKeyDown={this.addNewComment}
                    onClick={this.addNewComment}
                    class="btn-floating btn-large waves-effect waves-light red"
                  >
                    <i class="material-icons">add</i>
                  </button>
                </div>
              </form>

              <div className="row ">
                <table className="highlight ">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {comments.map(comment => {
                      return (
                        <tr>
                          <td>{comment.fName}</td>
                          <td>{comment.lName}</td>
                          <td>{comment.subject}</td>
                          <td>{comment.message}</td>
                          <td>
                            <input
                              type="hidden"
                              name="idForElement"
                              value={comment.id}
                            />
                            <button class="btn-floating waves-effect waves-light red">
                              <i
                                id={comment.id}
                                onClick={this.removeComment}
                                class="material-icons"
                              >
                                remove
                              </i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleInputChange: objectData => dispatch(handleInputChange(objectData)),
  removeComment: id => dispatch(removeComment(id)),
  addNewComment: () => dispatch(addNewComment())
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
