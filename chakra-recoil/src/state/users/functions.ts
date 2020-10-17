import { selectorFamily } from "recoil";
import { UserApi } from "../../api/users";
import { User } from "./atoms";

export const userByIdState = selectorFamily<User, number>({
  key: 'userById',
  get(userId) {
    return async () => UserApi.get(userId)
  },
});
