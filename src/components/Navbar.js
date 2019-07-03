import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/favicon.ico";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/profile"}>Profile</Link>

          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="signup" to={"/signup"}>
            Signup
          </Link>
          <Link className="login" to={"/login"}>
            Login
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="#">
          <img src={icon} alt="bootcamp-stats" />
        </a>
        <a className="navbar-brand brand-logo" href="#">
          Bootcamp Stats
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
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
          {this.getLinks()}
        </div>
      </nav>
    );
  }
}

export default Navbar;
