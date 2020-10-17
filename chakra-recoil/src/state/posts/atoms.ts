import { atom } from "recoil";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  commentKeys?: string[];
}

export const postsAtom = atom<Post[]>({
  key: "posts",
  default: [],
});

export const filterPostsAtom = atom<string | undefined>({ key: "postsFilter", default: undefined });
