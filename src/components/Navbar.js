import React from "react";
import icon from "../images/favicon.ico";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <a class="navbar-brand" href="#">
        <img src={icon} alt="bootcamp-stats" />
      </a>
      <a className="navbar-brand brand-logo" href="#">
        Bootcamp Stats
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              App Academy
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              Hack Reactor
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              Flat Iron School
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              General Assembly
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              Coding Dojo
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              Bloc
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link bootcamp-links" href="#">
              Thinkful
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
