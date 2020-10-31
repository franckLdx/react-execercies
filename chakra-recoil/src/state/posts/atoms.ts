import { atom } from "recoil";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  commentKeys?: string[];
}

export const filterPostsState = atom<string | undefined>({ key: "postsFilter", default: undefined });

export const loadedPostsDateState = atom<Date>({ key: "loadedPostsDate", default: new Date() });