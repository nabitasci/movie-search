import React, { Component } from "react";

import "./header.scss";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultHeader: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let currentScrollPos = window.scrollY;
    let defaultHeader = currentScrollPos > 200;
    this.setState({
      defaultHeader
    });
  };

  render() {
    let headerClass = ["header"];
    if(this.state.defaultHeader) {
      headerClass.push('small');
    }
    return (
      <div>
        <div className ={headerClass.join(' ')}>
          <h1 className="header_logo">Movie Search</h1>
        </div>
      </div>
    );
  }
}

export default Header;
