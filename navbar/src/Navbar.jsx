import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import scorp from './scorp.png'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">


            <a className="">
              <img
                className="justify-content-center"
                src={
                  scorp
                }
                width="45"
                alt="loading awesomeness"
              />
            </a>

            <a className="navbar-brand pl-3" href="/main">
              Personnel Tracker
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/pcs">
                    All Members
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tracker">
                    EPR/OPR Tracker
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/duties">
                    Additional Duties
                  </a>
                </li>
              </ul>
            </div>



          </div>
        </nav>
        <div className="alert-danger text-center">
          THIS SITE CONTAINS PERSONALLY IDENTIFIABLE INFORMATION
        </div>
      </div>
    );
  }
}

export default Navbar;
