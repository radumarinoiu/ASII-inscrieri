import React, { Component } from "react";

import "../shared/styles/Dashboard.scss";

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      search: null,
      list:['Andrei', 'Alina', 'Marcu', 'Vlad', 'Cristian', 'Marius']
    }

  }

  handleSearchChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

  
  
  updateSearch(event) {
    this.stState({ search: event.target.value.substr(0,20)});
    console.log(this.state);
  }

  // filterUpdate(value) {
  //   this.setState({search : value});
  // }
  render() {
 

    return (
      <div className="row page">
        <div className="left-container col s4">
            <form className=" container col s12">
                <div className="input-field col s12 search-field">
                  <i className="material-icons prefix">search</i>
                  <input 
                    id="icon_prefix" 
                    name="search"
                    type="text" 
                    className="validate search-field"
                    onChange= { this.handleSearchChange }
                    />
                </div>
              </form>
        </div>
      
       <div className="right-container col s8">

       <div className="row header">
        <div className= "col s12">
        HEADER
       </div>
        </div>

       <div className="row section">
        <div className="col s12">
        CONTENT
       </div>   
        </div>

        <div class="row footer">
          <form class="col s12  ">
            <div class="row">
              <div class="col s12">
                <textarea id="textarea1" class="materialize-textarea " placeholder="Add a comment"></textarea>
              </div>
            </div>
          </form>
        </div>

      </div>
      </div>
    );
  }
}
