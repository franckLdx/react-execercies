import React, { FunctionComponent } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { About } from "../About";

const Posts = React.lazy(() => import("../posts"));

export const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/about"><About /></Route>;
      <Route path="/posts"><Posts /></Route>;
      <Redirect
        to={{ pathname: "/posts" }} />
    </Switch>
  </BrowserRouter>
);
