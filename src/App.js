import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./Components/Partials/Header";

import Login from "./Components/Authentication/Login";
import selectUser from "./Components/Authentication/selectUser";
import * as ROUTES from "./Constants/Routes";
import Signup from "./Components/Authentication/Signup";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path={ROUTES.HOME} />
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGNUP} component={Signup} />
      <Route exact path={ROUTES.selectUser} component={selectUser} />
    </Router>
  );
}

export default App;
