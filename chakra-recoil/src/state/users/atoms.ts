import { atom } from "recoil";

export interface User {
  id: number,
  username: string,
  name: string,
  email: string;
}

export const currentUserAtom = atom<number | undefined>({ key: 'currentUser', default: undefined });