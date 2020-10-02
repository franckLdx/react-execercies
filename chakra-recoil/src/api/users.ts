import { User } from "../state/user";
import { get } from "./misc";

export const UserApi = {
  async get(userId: number | undefined): Promise<User | undefined> {
    if (userId === undefined) {
      return undefined;
    }
    const url = `users/${userId}`;
    return await get(url, `Failed to load user ${userId}`);
  }
}