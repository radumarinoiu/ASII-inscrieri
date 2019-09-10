import React, { Component } from "react";

import "../LoadingPage/LoadingPage.scss";

export default class LoadingPage extends Component {
  render() {
    return (
      <div className="spinner-page">
        <div className="spinner-container">
          <div className="preloader-wrapper big active spinner ">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
