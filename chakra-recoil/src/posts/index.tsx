import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Posts = React.lazy(() => import("./list"));
const Post = React.lazy(() => import("./Post"));

const PostsRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/posts/:id"><Post /></Route>;
      <Route exact={true} path="/posts"><Posts /></Route>;
      <Route><Posts /></Route>;
    </Switch>
  </BrowserRouter>
);

export default PostsRouter;