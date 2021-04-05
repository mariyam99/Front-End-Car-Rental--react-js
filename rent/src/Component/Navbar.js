import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="d-flex flex-column flex-md-row align-items-center p-3 bg-white border-bottom shadow-sm">
          <p className="h5 my-0 me-md-auto fw-normal">Rent a Car</p>
          <nav className="my-2 my-md-0 me-md-3">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  How to rent?
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">
                  Contact Us
                </Link>
              </li>
              <Link className="btn btn-outline-primary" to="/Login">
                Login!
              </Link>
            </ul>
          </nav>
          <Link className="btn btn-outline-primary" to="/SignUp">
            Register Now!
          </Link>
        </header>
      </div>
    );
  }
}

export default Navbar;
