import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./signup.css";

class SignuphtmlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      email: "",

      password: "",
      password2: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      handle: this.state.handle,
      email: this.state.email,

      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-bg">
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 ">
          <main className="pa4 black-80">
            <form className="measure" onSubmit={this.handleSubmit}>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="handle">
                    Handle
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="text"
                    name="handle"
                    id="handle"
                    value={this.state.handle}
                    onChange={this.update("handle")}
                    placeholder="Handle"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password2">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="password"
                    name="password2"
                    id="password2"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="lh-copy mt3">
                <Link to="/login" className="f6 link dim black db">
                  Log In
                </Link>
              </div>
              {this.renderErrors()}
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default withRouter(SignuphtmlForm);
