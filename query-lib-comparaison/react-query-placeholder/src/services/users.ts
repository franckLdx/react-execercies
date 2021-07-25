import { useQuery } from "react-query";
import { get } from "./fetchTools";

export interface User {
  id: number,
  name: string,
  userName: string,
  email: string,
}

export const USER_KEY = 'user';

export const useUserById = (userId: number) => useQuery<User>(
  [USER_KEY, userId],
  async () => {
    const response = await get(`users/${userId}`)
    return {
      id: response.id,
      name: response.name,
      userName: response.username,
      email: response.email,
    }
  },
  { staleTime: Infinity }
);
