import React from "react";
import icon from "../images/favicon.ico";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        <img src={icon} alt="bootcamp-stats" />
      </a>
      <a className="navbar-brand brand-logo" href="#">
        Bootcamp Stats
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item nav-li active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link" href="#">
              App Academy
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link" href="#">
              Hack Reactor
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link" href="#">
              Flat Iron School
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link" href="#">
              General Assembly
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link" href="#">
              Coding Dojo
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link" href="#">
              Bloc
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link" href="#">
              Thinkful
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
