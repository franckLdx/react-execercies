import { atom } from "recoil";

export interface User {
  id: number,
  username: string,
  name: string,
  email: string;
}

export const currentUserIdState = atom<number | undefined>({ key: 'currentUserId', default: undefined });
