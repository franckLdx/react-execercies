import React, { FunctionComponent } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Posts = React.lazy(() => import("./List"));
const Post = React.lazy(() => import("./Post"));

const PostsRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/posts/:id"><Post /></Route>;
      <Route exact={true} path="/posts"><Posts /></Route>;
      <Redirect
        to={{ pathname: "/posts" }} />
    </Switch>
  </BrowserRouter>
);

export default PostsRouter;