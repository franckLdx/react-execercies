import { selectorFamily } from "recoil";
import { UserApi } from "../../api/users";
import { User } from "./atoms";

export const userById = selectorFamily<User, number>({
  key: 'UserById',
  get(userId) {
    return async () => UserApi.get(userId)
  },
});
