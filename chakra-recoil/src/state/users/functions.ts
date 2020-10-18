import { selector, selectorFamily } from "recoil";
import { UsersApi } from "../../api/users";
import { User } from "./atoms";

export const userByIdState = selectorFamily<User, number>({
  key: 'userById',
  get(userId) {
    return async () => UsersApi.get(userId)
  },
});

export const usersState = selector<User[]>({
  key: "usersList",
  get() {
    return UsersApi.getAll();
  },
});