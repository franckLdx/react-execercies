import { selector, selectorFamily } from "recoil";
import { UsersApi } from "../../api/users";
import { currentUserIdAtom, User } from "./atoms";

export const usersState = selector<User[]>({
  key: "usersList",
  async get() {
    return await UsersApi.getAll();
  },
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

export const currentUserState = selector<User | undefined>({
  key: "currentUser",
  get({ get }) {
    const currentUserId = get(currentUserIdAtom);
    if (currentUserId === undefined) {
      return undefined;
    }
    return get(userByIdState(currentUserId));
  },
});