import { selector, selectorFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { addToCache, filterPostsState, getFromCache, loadedPostsDateState, Post } from "./atoms";

export const postsState = selector<Post[]>({
  key: "postsList",
  async get({ get }) {
    get(loadedPostsDateState);
    const posts = await PostsApi.getAll();
    return posts;
  },
});

export const filteredPostsState = selector<Post[]>({
  key: "postsFiltered",
  async get({ get }) {
    const posts = get(postsState);
    const filter = canonicalString(get(filterPostsState));
    return filter === undefined ? posts : posts.filter(post => canonicalString(post.title)?.includes(filter))
  },
});

export const postByIdState = selectorFamily<Post, number>({
  key: "postById",
  get(postId) {
    return async ({ get }) => {
      const post = get(getFromCache(postId));
      if (post !== undefined) {
        return post;
      }
      const newPost = await PostsApi.get(postId);
      registerPost(newPost);
      return newPost;
    }
  },
});

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()

const registerPost = (post: Post) => addToCache(post.id, post);