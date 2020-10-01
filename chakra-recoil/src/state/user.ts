import { atomFamily } from "recoil";
import { UserApi } from "../api/users";

export interface User {
  id: number,
  username: string,
  name: string,
  email: string;
}

export const usersFamily = atomFamily<User | undefined, number | undefined>({
  key: 'User',
  default: UserApi.get,
});
