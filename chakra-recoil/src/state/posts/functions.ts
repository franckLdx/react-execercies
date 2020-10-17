import { selector, selectorFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { filterPostsAtom, Post } from "./atoms";

export const postsState = selector<Post[]>({
  key: "postsList",
  get() {
    return PostsApi.getAll();
  },
});

export const filteredPostsState = selector<Post[]>({
  key: "postsFiltered",
  async get({ get }) {
    const posts = get(postsState);
    const filter = canonicalString(get(filterPostsAtom));
    return filter === undefined ? posts : posts.filter(post => canonicalString(post.title)?.includes(filter))
  },
});

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()

export const postByIdState = selectorFamily<Post, number>({
  key: "postById",
  get(postId) {
    return async () => PostsApi.get(postId);
  },
});
