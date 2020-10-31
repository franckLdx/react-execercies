import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "../sharedComponents/ErrorBoudary";
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
      <ErrorBoundary>
        <Switch>
          {routesDef.map(route)}
        </Switch>
      </ErrorBoundary>
    </BrowserRouter >
  )
};

