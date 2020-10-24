import { atom, selector, selectorFamily } from "recoil";
import { UsersApi } from "../../api/users";
import { currentUserIdAtom, User, usersCache } from "./atoms";

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
      const userAtom = usersCache.get(userId);
      if (userAtom) {
        return get(userAtom);
      }
      const user = await UsersApi.get(userId)
      registerUser(user);
      return user;
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

function registerUser(user: User) {
  const newAotm = atom<User>({ key: `user_${user.id}`, default: user });
  usersCache.set(user.id, newAotm);
}