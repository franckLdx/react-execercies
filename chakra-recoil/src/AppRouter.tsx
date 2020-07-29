import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Posts } from "./Posts";

export const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about"><About /></Route>;
      <Route path="/"><Posts /></Route>;
      <Route><Posts /></Route>;
    </Switch>
  </BrowserRouter>
);
