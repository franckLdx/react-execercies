import { selectorFamily } from "recoil";
import { Post, postsAtom } from "./model";

export const getPost = selectorFamily<Post | undefined, number>({
  key: "getPost",
  get: (id) => ({ get }) => {
    const posts = get(postsAtom);
    return posts.find(post => post.id === id);
  },
  set: (_) => ({ get, set }, post) => {
    if (post === undefined) {
      return;
    }
    const posts = get(postsAtom);
    set(postsAtom, [...posts, post as Post]);
  }
});