import { atom } from "recoil";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const noLoadPosts =
{
  state: 'none' as const,
  posts: [],
  error: null,
}

export const loadingPosts =
{
  state: 'loading' as const,
  posts: [],
  error: null,
}

export const loadedPosts = (posts: Post[]) => ({
  state: 'loaded' as const,
  posts,
  error: null,
});

export const loadPostsError = (error: Error) => ({
  state: 'error' as const,
  posts: [],
  error: error,
})

export type PostsModel =
  typeof noLoadPosts |
  typeof loadingPosts |
  ReturnType<typeof loadedPosts> |
  ReturnType<typeof loadPostsError>;

export const postsModelAtom = atom<PostsModel>({
  key: "posts",
  default: noLoadPosts,
});
