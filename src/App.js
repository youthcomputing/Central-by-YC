import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./Partials/Header";
import Login from "./Authentication/Login";

import * as ROUTES from "./Constants/Routes";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Header/>
    </div>
=======
    <Router>
      <Header />
      <Route exact path={ROUTES.HOME} />
      <Route path={ROUTES.LOGIN} component={Login} />
    </Router>
>>>>>>> 257e4f3a60cb438abc2d745d502c27784b0a9f2c
  );
}

export default App;
