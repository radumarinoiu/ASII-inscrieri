import React, { Component } from "react";
import CustomInputText from "../shared/CustomInputText/CustomInputText";

import "../shared/styles/Dashboard.scss";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      list: [],
      listSearch: ["Andrei", "Alina", "Marcu", "Vlad", "Cristian", "Marius"],
      comment: "",
      myName: "Mindrisoru Tudor"
    };
  }

  handleSearchChange = e => {
    const value = e.target.value;
    const listSearch = this.state.list.filter(
      item => item.toLowerCase().indexOf(value) !== -1
    );
    this.setState({
      [e.target.name]: e.target.value,
      listSearch: listSearch
    });
  };

  handleCommentChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postCommentText = e => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      this.addCommentToContent(e.target.value);
      e.target.value = "";
    }
  };

  addCommentToContent(value) {
    const content = document.querySelector(".section");
    const commentValue = document.createElement("p");
    commentValue.innerHTML = this.state.myName + ` : ` + value;
    commentValue.className = "comment-added";
    

    content.appendChild(commentValue);
  }

  // componentDidMount() {
  //   fetch('https://asii-join-api.herokuapp.com/api/v1/volunteers')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   const data = (JSON.stringify(myJson));
  //   for(let it of data) {
  //     var joined = this.state.list.push(`${it.firstName}` + `${it.lastName}`);
  //     this.setState({ list: joined })
  //     console.log(it.lastName);
  //   }
  // });
  // }

  render() {
    return (
      <div className="row page">
        <div className="left-container col s3">
          <form className=" container col s12">
            <div className="col s12 m12 l12">
              <CustomInputText
                handleChange={this.handleSearchChange}
                type="text"
                min="3"
                max="100"
                id="faculty"
                name="search"
                value={this.state.search}
                label="Facultate"
                placeholder="Informatica"
              />
            </div>
          </form>
          <div className="leftSide-body col s12 m12 l12">
            <div className="users-list col s12 m12 l12">
              {this.state.listSearch.map(item => {
                return (
                  <div className="col s12 m12 l12 ">
                    <div className="col s1 m1 l1">
                      <i class="fas fa-smile-beam" />
                    </div>
                    <div className="col s9 m9 l9">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="right-container col s9">
          <div className="row header">
            <div className="col s12">HEADER</div>
          </div>

          <div className="row section">
            <div className="col s12"></div>
          </div>

          <div className="footer">
            <form className="comment-form ">
                <textarea
                  id="textarea1"
                  className="comment-area"
                  placeholder="Add a comment"
                  value={this.state.comment}
                  name="comment"
                  onChange={this.handleCommentChange}
                  onKeyPress={this.postCommentText}
                ></textarea>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
