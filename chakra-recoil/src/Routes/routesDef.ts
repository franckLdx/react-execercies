import { lazy } from "react";
import { Home } from "../pages/Home";

const Posts = lazy(() => import("../pages/Posts/Posts"));
const Post = lazy(() => import("../pages/Posts/Post"));
const Users = lazy(() => import("../pages/Users/Users"));
const User = lazy(() => import("../pages/Users/User"));
const About = lazy(() => import("../pages/About"));

export const routesDef = [
  { path: "/", Component: Home },
  { path: "/posts/", Component: Posts },
  { path: "/posts/:id", Component: Post },
  { path: "/users/", Component: Users },
  { path: "/users/:id", Component: User },
  { path: "/about", Component: About }
]
