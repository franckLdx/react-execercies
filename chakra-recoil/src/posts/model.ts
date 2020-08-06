import { atom } from "recoil";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const postsAtom = atom<Post[]>({
  key: "posts",
  default: [],
});
