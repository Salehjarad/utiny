import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Privacy from "../pages/privcey";
import Support from "../pages/supoort";
import Nav from "./nav";

export default function (props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/feedback" exact component={Support} />
        <Route path="/*" component={Home} />
      </Switch>
    </Router>
  );
}
