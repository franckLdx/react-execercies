import { atom, selector, selectorFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { Post } from "./definitions";

export const loadedPostsDateState = atom<Date>({ key: "loadedPostsDate", default: new Date() });

// export const postsRequestIdState = atom<number>({ key: 'postsRequestId', default: 0 })

export const postsState = selector<Post[]>({
  key: "posts",
  get: async () => await PostsApi.getAll(),
});

export const postByIdState = selectorFamily<Post | undefined, number>({
  key: "postById",
  get(postId) {
    return ({ get }) => {
      const posts = get(postsState);
      return posts.find(post => post.id === postId);
    }
  },
});