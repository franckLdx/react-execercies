import { atom } from "recoil";
import { atomMap } from "../atomMap";

export interface User {
  id: number,
  username: string,
  name: string,
  email: string;
}

export const currentUserIdAtom = atom<number | undefined>({ key: 'currentUserId', default: undefined });

export const { map: usersCache, add: addToCache, get: getFromCache } = atomMap<number, User>('users');
