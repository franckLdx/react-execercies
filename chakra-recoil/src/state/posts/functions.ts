import { selector, selectorFamily } from "recoil";
import { PostsApi } from "../../api/posts";
import { Post } from "../../model";
import { filterPostsState, postsCountState } from "./atoms";

export const postsState = selector<Post[]>({
  key: "postsList",
  get: async () => await PostsApi.getAll(),
});

export const postsState2 = selectorFamily<Post[], number>({
  key: "postsList2",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get(counter: number) { return async () => await PostsApi.getAll() },
});

export const filteredPostsState = selector<Post[]>({
  key: "postsFiltered",
  get({ get }) {
    const posts = get(postsState);
    const filter = canonicalString(get(filterPostsState));
    return filter === undefined ? posts : posts.filter(post => canonicalString(post.title)?.includes(filter))
  }
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

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()

export const filteredPostsState2 = selector<Post[]>({
  key: "postsFiltered",
  async get({ get }) {
    const count = get(postsCountState)
    const posts = get(postsState2(count));
    const filter = canonicalString(get(filterPostsState));
    return filter === undefined ? posts : posts.filter(post => canonicalString(post.title)?.includes(filter))
  },
});
