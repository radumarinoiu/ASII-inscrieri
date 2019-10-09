import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";

export default class WithDateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expiredTime: false
    };
  }

  componentDidMount() {
    const endDate = "10/10/2019"; // DD/MM/YY
    const momentEndDate = moment(endDate).format("YYYY-MM-DD");
    const momentCurrentDate = moment().format("YYYY-MM-DD");
    
    this.setState({
      expiredTime: momentCurrentDate < momentEndDate ? false : true
    });
  }
  render() {
    return (
      <div>
        {this.state.expiredTime ? (
          <Redirect to="/expired" />
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
