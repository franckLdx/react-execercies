import { get } from "./misc";

interface UserPayload {
  id: number,
  name: string,
  username: string,
  email: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export const UsersApi = {
  async getAll(): Promise<UserPayload[]> {
    return await get("users", `Failed to load users`);
  },
  async get(userId: number): Promise<UserPayload> {
    const url = getUserUrl(userId);
    return await get(url, `Failed to load user ${userId}`);
  }
}

const getUserUrl = (userId?: number) => `users/${userId}`;