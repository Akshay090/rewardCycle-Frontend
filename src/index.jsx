import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/:id" component={Profile} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
