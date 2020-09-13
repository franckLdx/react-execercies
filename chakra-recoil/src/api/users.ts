import { User } from "../users/model";
import { get } from "./misc";

export const UserApi = {
  async get(userId: number): Promise<User> {
    const response = await get(`users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to load user ${userId}: ${response.status}/${response.statusText}`);
    }
    return await response.json();
  }
}