import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Contact manager
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
