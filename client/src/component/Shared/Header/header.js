import React, { Component } from "react";

import "./header.scss";
class Header extends Component {

  render() {
    return (
      <div>
        <div className ={"header"}>
          <h1 className="header_logo">Movie Search</h1>
        </div>
      </div>
    );
  }
}

export default Header;
