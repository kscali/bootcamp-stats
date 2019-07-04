import React from "react";
import "./App.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import Navbar from "./navbar_container";
import MainPage from "./main/MainPage";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DataForm from "../components/data/data_form_container";
import Footer from "./footer";

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/dataform" component={DataForm} />
      <Route exact path="/" component={MainPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
