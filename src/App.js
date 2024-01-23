import React from "react"

import { BrowserRouter as Router, Route, Switch, Link, useLocation } from "react-router-dom";

import Home from "./Home"
import About from "./About"
import NoMatch from './NoMatch';
import UserProfile from "./UserProfile";





function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/users/:userId">
            <UserProfile />
          </Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
