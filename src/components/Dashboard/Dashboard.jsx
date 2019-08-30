import React, { Component } from "react";

import "../shared/styles/Dashboard.scss";

export default class Dashboard extends Component {

  constructor() {
    super(props);
    
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0,20)});
    console.log(this.state);
  }

  filterUpdate(value) {
    this.setState({search : value});
  }
  render() {
    return (
      <div>
        <div className="left-container">
          <div className="search-input">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">search</i>
                  <input id="icon_prefix" type="text" className="validate" value={this.state.search}/>
                  {/* <label for="icon_prefix">Search</label> */}
                </div>
              </div>
              </form>
        </div>
      </div>
      </div>

    );
  }
}
