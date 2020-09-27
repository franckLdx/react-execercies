import { atom } from "recoil";
import { LoadtingState } from "../loadingState";

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

export const loadingStateAtom = atom<LoadtingState>({ key: "postsLoadingState", default: 'none' });

export const loadingErrorAtom = atom<Error | undefined>({ key: "postsLoadingError", default: undefined })