import { atom } from "recoil";

export const filterPostsState = atom<string | undefined>({ key: "postsFilter", default: undefined });

export const loadedPostsDateState = atom<Date>({ key: "loadedPostsDate", default: new Date() });