import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./data_form.css";

class DataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser.id,
      graduationYear: 0,
      monthsToFindJob: 0,
      jobApps: 0,
      phoneScreens: 0,
      onSites: 0,
      referral: false,
      coldApply: false,
      haveDegree: false,
      typeDegree: "No",
      positionHired: "",
      salary: 0,
      yrsCoding: 0,
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
      user: this.state.user,
      graduationYear: this.state.graduationYear,
      monthsToFindJob: this.state.monthsToFindJob,
      jobApps: this.state.jobApps,
      phoneScreens: this.state.phoneScreens,
      onSites: this.state.onSites,
      referral: this.state.referral,
      coldApply: this.state.coldApply,
      haveDegree: this.state.haveDegree,
      typeDegree: this.state.typeDegree,
      positionHired: this.state.positionHired,
      salary: this.state.salary,
      yrsCoding: this.state.yrsCoding
    };

    this.props.submit(user);
    this.props.history.push("/profile");

    // this.setState({
    //   graduationYear: 0,
    //   monthsToFindJob: 0,
    //   jobApps: 0,
    //   phoneScreens: 0,
    //   onSites: 0,
    //   referral: false,
    //   coldApply: false,
    //   haveDegree: false,
    //   typeDegree: "No",
    //   positionHired: "",
    //   salary: 0,
    //   yrsCoding: 0,
    //   errors: {}
    // });
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
      <div>
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 ">
          <main className="pa4 black-80">
            <form className="measure" onSubmit={this.handleSubmit}>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">
                  Please help us by filling out this form
                </legend>

                <div className="form-group mt3">
                  <label htmlFor="sel1" className="db fw6 lh-copy f6">
                    Which coding bootcamp did you attend?
                  </label>
                  <select className="form-control" id="sel1">
                    <option selected value="" disabled>
                      Please Select a Bootcamp
                    </option>
                    <option value="App Academy">App Academy</option>
                    <option value="Hack Reactor">Hack Reactor</option>
                    <option value="Flat Iron">Flat Iron School</option>
                    <option value="General Assembly">General Assembly</option>
                    <option value="Bloc">Bloc</option>
                    <option value="Thinkful">Thinkful</option>
                    <option value="Coding Dojo">Coding Dojo</option>
                  </select>
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="gradYr">
                    Graduation Year
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="number"
                    name="gradYr"
                    id="gradYr"
                    value={this.state.gradYr}
                    onChange={this.update("graduationYear")}
                    placeholder="What year did you graduate?"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="months">
                    Months To Find Job
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="number"
                    name="months"
                    id="months"
                    value={this.state.monthsToFindJob}
                    onChange={this.update("monthsToFindJob")}
                    placeholder="How many months did it take to get a job offer?"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="jobApps">
                    Job Applications
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="number"
                    name="jobApps"
                    id="jobApps"
                    value={this.state.jobApps}
                    onChange={this.update("jobApps")}
                    placeholder="How many job applications did you send in?"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="phoneScreens">
                    Phone Screens
                  </label>
                  <input
                    className=" pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="number"
                    name="phoneScreens"
                    id="phoneScreens"
                    value={this.state.phoneScreens}
                    onChange={this.update("phoneScreens")}
                    placeholder="How many phone screens did you have?"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="onSites">
                    On Sites
                  </label>
                  <input
                    className=" pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="number"
                    name="onSites"
                    id="onSites"
                    value={this.state.onSites}
                    onChange={this.update("onSites")}
                    placeholder="How many onsite interviews did you have?"
                  />
                </div>
                <div className="mv3">
                  <label htmlFor="cold-apply" className="db fw6 lh-copy f6">
                    Cold Apply
                  </label>
                  <select
                    onChange={this.update("coldApply")}
                    className="form-control"
                    id="cold-apply"
                  >
                    <option disabled selected selected value="">
                      Did you get your job through cold applications?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="mv3">
                  <label htmlFor="referral" className="db fw6 lh-copy f6">
                    Referral
                  </label>
                  <select
                    onChange={this.update("referral")}
                    className="form-control"
                    id="referral"
                  >
                    <option disabled selected selected value="">
                      Did you get your job through a referral?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="mv3">
                  <label htmlFor="haveDegree" className="db fw6 lh-copy f6">
                    Degree
                  </label>
                  <select
                    onChange={this.update("haveDegree")}
                    className="form-control"
                    id="degree"
                  >
                    <option disabled selected selected value="">
                      Do you have a degree?
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="mv3">
                  <label htmlFor="typeDegree" className="db fw6 lh-copy f6">
                    Degree
                  </label>
                  <select
                    onChange={this.update("typeDegree")}
                    className="form-control"
                    id="typeDegree"
                  >
                    <option disabled selected value="">
                      What type of degree do you have?
                    </option>
                    <option value="Master's">Master's</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Associate's">Associate's</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="mv3">
                  <label htmlFor="positionHired" className="db fw6 lh-copy f6">
                    Position
                  </label>
                  <select
                    onChange={this.update("positionHired")}
                    className="form-control"
                    id="positionHired"
                  >
                    <option disabled selected value="">
                      What position were you hired for?
                    </option>
                    <option value="junior">Junior/Entry-level</option>
                    <option value="mid">Mid-Level</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
                <div className="mv3">
                  <label htmlFor="salary" className="db fw6 lh-copy f6">
                    Salary
                  </label>
                  <input
                    className=" pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="number"
                    name="salary"
                    id="salary"
                    value={this.state.salary}
                    onChange={this.update("salary")}
                    placeholder="What was your starting salary?"
                  />
                </div>
                <div className="mv3">
                  <label htmlFor="yrsCoding" className="db fw6 lh-copy f6">
                    Coding Experience
                  </label>
                  <input
                    className=" pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="number"
                    name="yrsCoding"
                    id="yrsCoding"
                    value={this.state.yrsCoding}
                    onChange={this.update("yrsCoding")}
                    placeholder="Yrs of experience before bootcamp. If yr < 1, please put 0."
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Submit"
                />
              </div>

              {this.renderErrors()}
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default withRouter(DataForm);
