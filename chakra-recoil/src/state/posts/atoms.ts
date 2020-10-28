import { atom } from "recoil";
import { atomMap } from "../atomMap";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  commentKeys?: string[];
}

export const filterPostsState = atom<string | undefined>({ key: "postsFilter", default: undefined });

export const { map: postsCache, add: addToCache, get: getFromCache } = atomMap<number, Post>('posts');

export const loadedPostsDateState = atom<number | undefined>({ key: "loadedPostsDate", default: undefined });