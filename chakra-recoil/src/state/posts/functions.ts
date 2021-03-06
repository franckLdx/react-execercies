import { selector, selectorFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { Post } from "../../model";
import { filterPostsState, loadedPostsDateState } from "./atoms";

export const postsState = selector<Post[]>({
  key: "postsList",
  async get({ get }) {
    get(loadedPostsDateState);
    return await PostsApi.getAll();
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

export const postByIdState = selectorFamily<Post | undefined, number>({
  key: "postById",
  get(postId) {
    return async ({ get }) => {
      const posts = get(postsState);
      return posts.find(post => post.id === postId);
    }
  },
});

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()
