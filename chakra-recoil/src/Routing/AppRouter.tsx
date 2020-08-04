import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "../About";

const Posts = React.lazy(() => import("../posts/Posts"));

export const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about"><About /></Route>;
      <Route path="/"><Posts /></Route>;
      <Route><Posts /></Route>;
    </Switch>
  </BrowserRouter>
);
