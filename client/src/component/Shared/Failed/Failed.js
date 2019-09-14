import React, { Component } from "react";

import image from "../../../img/failed.svg";

import "./Failed.css";

class Failed extends Component {
  render() {
    return (
      <div className="Failed">
        <img src={image} alt="Failed" />
        <h3>{this.props.error} :(</h3>
      </div>
    );
  }
}

export default Failed;
