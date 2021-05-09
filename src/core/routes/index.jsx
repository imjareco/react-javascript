import React from "react";
import PropTypes from "prop-types";
import { Redirect, Switch, Route } from "react-router-dom";

export const routerElementsBuilder = (routes) => 
  routes.map((route) => <Route {...route} key={route.path} />);

const Routes = ({ routes }) => {
  const routeList = routerElementsBuilder(routes);
  return (
    <Switch>
      {routeList.map((route) => route)}
      <Redirect to="/" />
    </Switch>
  );
};

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default Routes;