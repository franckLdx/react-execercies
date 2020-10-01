import { atom, selector } from "recoil";
import { LoadingState } from "../loadingState";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type Posts = Post[];

export const postsAtom = atom<Posts>({
  key: "posts",
  default: [],
});

export const loadingStateAtom = atom<LoadingState>({ key: "postsLoadingState", default: 'none' });

export const loadingErrorAtom = atom<Error | undefined>({ key: "postsLoadingError", default: undefined })

export const filterPosts = atom<string | undefined>({ key: "postsFilter", default: undefined });

export const filteredPosts = selector<Posts>({
  key: "postsFiltered",
  get({ get }) {
    const posts = get(postsAtom);
    const filter = canonicalString(get(filterPosts));
    if (filter === null || filter === undefined || filter === '') {
      return posts;
    }
    return posts.filter(post => canonicalString(post.title)?.includes(filter))
  }
});

const canonicalString = (value: string | null | undefined) => value?.trim().toLowerCase()