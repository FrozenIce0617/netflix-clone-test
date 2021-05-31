import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/movie/:id"]} component={Detail} />
      </Switch>
    </Router>
  );
};

export default Routes;
