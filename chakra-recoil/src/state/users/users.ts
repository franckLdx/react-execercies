import { atomFamily, selector, selectorFamily } from "recoil";
import { UsersApi } from "../../api/users";
import { User } from "./definitions";

export const usersFamilyState = atomFamily<User, number>({
  key: 'users',
  default: async userId => UsersApi.get(userId)
})

export const usersState = selector<User[]>({
  key: "usersList",
  get: async () => await UsersApi.getAll(),
});

export const userByIdState = selectorFamily<User | undefined, number>({
  key: 'userById',
  get(userId) {
    return async ({ get }) => {
      const users = get(usersState);
      return users.find(user => user.id === userId);
    }
  },
});
