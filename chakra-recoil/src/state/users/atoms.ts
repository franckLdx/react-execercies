import { atom, RecoilState } from "recoil";

export interface User {
  id: number,
  username: string,
  name: string,
  email: string;
}

export const currentUserIdAtom = atom<number | undefined>({ key: 'currentUserId', default: undefined });

type UserAtom = RecoilState<User>;

export const usersCache: Map<number, UserAtom> = new Map();