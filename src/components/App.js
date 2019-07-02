import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MainPage from "./MainPage";

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
