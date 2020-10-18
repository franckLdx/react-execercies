import { lazy } from "react";
import { Home } from "../pages/Home";

const Posts = lazy(() => import("../pages/Posts/Posts"));
const Post = lazy(() => import("../pages/Posts/Post"));
const Users = lazy(() => import("../pages/Users/Users"));
const User = lazy(() => import("../pages/Users/User"));
const About = lazy(() => import("../pages/About"));

const POSTS_URL = '/posts';
const USERS_URL = '/users';
const ABOUT_URL = '/about';

export const getHomePageUrl = () => "/";
export const getPostsPageUrl = () => POSTS_URL;
export const getPostPageUrl = (postId: number) => `${POSTS_URL}/${postId}`;
export const getUsersPageUrl = () => USERS_URL;
export const getUserPageUrl = (userId: number) => `${USERS_URL}/${userId}`;
export const getAboutPageUrl = () => ABOUT_URL;

export const routesDef = [
  { path: "/", Component: Home },
  { path: POSTS_URL, Component: Posts },
  { path: `${POSTS_URL}/:id`, Component: Post },
  { path: USERS_URL, Component: Users },
  { path: `${USERS_URL}/:id`, Component: User },
  { path: ABOUT_URL, Component: About }
]
