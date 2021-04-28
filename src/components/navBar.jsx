import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-custom navbar navbar-expand-lg">
        <a className="navbar-brand nav-custom" href="#">
          <img src="../../images/001-health.svg"></img> Health Nut Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
