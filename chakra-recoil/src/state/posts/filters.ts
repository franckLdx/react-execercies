import { atom, selector } from "recoil";
import { Post } from "./definitions";
import { postsState } from "./posts";

export const filterPostsState = atom<string | undefined>({ key: "postsFilter", default: undefined });

export const filteredPostsState = selector<Post[]>({
  key: "postsFiltered",
  get({ get }) {
    const posts = get(postsState);
    const filter = canonicalString(get(filterPostsState));
    return filter === undefined ? posts : posts.filter(post => canonicalString(post.title)?.includes(filter))
  }
});

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()
