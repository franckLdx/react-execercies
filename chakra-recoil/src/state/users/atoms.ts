import { atom, atomFamily } from "recoil";
import { UsersApi } from "../../api/users";

export interface User {
  id: number,
  username: string,
  name: string,
  email: string;
}

export const currentUserIdState = atom<number | undefined>({ key: 'currentUserId', default: undefined });

export const usersState = atomFamily<User, number>({
  key: 'users',
  default: async userId => UsersApi.get(userId)
})