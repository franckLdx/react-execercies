import { atom, selector } from "recoil";
import { User } from "./definitions";
import { userByIdState } from "./users";

export const currentUserIdState = atom<number | undefined>({ key: 'currentUserId', default: undefined });

export const currentUserState = selector<User | undefined>({
  key: "currentUser",
  get({ get }) {
    const currentUserId = get(currentUserIdState);
    if (currentUserId === undefined) {
      return undefined;
    }
    return get(userByIdState(currentUserId));
  },
});