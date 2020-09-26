import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesDef } from "./routesDef";

const route = (routeDef: any, index: number) => (
  <Route
    key={index}
    exact={true}
    path={routeDef.path}
    render={() => <routeDef.Component />}
  />
);

export const AppRouter: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routesDef.map(route)}
      </Switch>
    </BrowserRouter >
  )
};

