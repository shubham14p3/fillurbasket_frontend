import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login";
import { Constants } from "./Constants";
class Routes extends Component {
  isUserLoggedIn = function(targetComponent) {
    if (window.fub.isUserLoggedIn === true) {
      console.log("User is logged in. Allowing route. ", window.location.href);
      return targetComponent;
    } else {
      console.log(
        "User is ** NOT ** logged in. Redirecting to Login. ",
        window.location.href
      );
      return <Redirect to={Constants.Routes.Login} />;
    }
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path={Constants.Routes.Home}
          render={props => <Home {...props} />}
        />
        <Route
          exact
          path={Constants.Routes.Login}
          render={props => <Login {...props} />}
        />
        <Route
          exact
          path={Constants.Routes.Profile}
          render={props => this.isUserLoggedIn(<Profile {...props} />)}
        />
      </Switch>
    );
  }
}

export default Routes;
