import { lazy } from "react";
import { Home } from "../pages/Home";

const Posts = lazy(() => import("../pages/Posts/Posts"));
const Post = lazy(() => import("../pages/Posts/Post"));
const Users = lazy(() => import("../pages/Users/Users"));
const User = lazy(() => import("../pages/Users/User"));
const About = lazy(() => import("../pages/About"));

export const POSTS_URL = '/posts';
export const USERS_URL = '/users';
export const ABOUT_URL = '/about';

export const routesDef = [
  { path: "/", Component: Home },
  { path: POSTS_URL, Component: Posts },
  { path: `${POSTS_URL}/:id`, Component: Post },
  { path: USERS_URL, Component: Users },
  { path: `${USERS_URL}/:id`, Component: User },
  { path: ABOUT_URL, Component: About }
]
