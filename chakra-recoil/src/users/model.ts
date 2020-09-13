import { atomFamily } from "recoil";
import { UserApi } from "../api/users";

export interface User {
  id: number,
  username: string,
}

export const usersFamily = atomFamily<User | undefined, number>({
  key: 'User',
  default: UserApi.get,
});
