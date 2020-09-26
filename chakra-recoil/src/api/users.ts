import { User } from "../pages/Users/model";
import { get } from "./misc";

export const UserApi = {
  async get(userId: number | undefined): Promise<User | undefined> {
    if (userId === undefined) {
      return undefined;
    }
    const response = await get(`users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to load user ${userId}: ${response.status}/${response.statusText}`);
    }
    return await response.json();
  }
}