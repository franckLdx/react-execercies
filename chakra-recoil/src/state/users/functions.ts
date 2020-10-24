import { selector, selectorFamily } from "recoil";
import { UsersApi } from "../../api/users";
import { addToCache, currentUserIdAtom, getFromCache, User, usersCache } from "./atoms";

export const usersState = selector<User[]>({
  key: "usersList",
  async get() {
    const users = await UsersApi.getAll();
    users
      .filter(user => !usersCache.has(user.id))
      .forEach(registerUser);
    return users;
  },
});

export const userByIdState = selectorFamily<User, number>({
  key: 'userById',
  get(userId) {
    return async ({ get }) => {
      const user = get(getFromCache(userId));
      if (user !== undefined) {
        return user;
      }
      const newUser = await UsersApi.get(userId)
      registerUser(newUser);
      return newUser;
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

const registerUser = (user: User) => addToCache(user.id, user);