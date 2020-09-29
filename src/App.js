import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./Partials/Header";
import Header2 from "./Partials/Header2";

import Login from "./Authentication/Login";

import * as ROUTES from "./Constants/Routes";

function App() {
  return (
    <Router>
      <Header />
      <Header2 />
      <Route exact path={ROUTES.HOME} />
      <Route path={ROUTES.LOGIN} component={Login} />
    </Router>
  );
}

export default App;
