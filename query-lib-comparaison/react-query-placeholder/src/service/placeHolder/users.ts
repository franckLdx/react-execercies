import { useQuery } from "react-query";
import { myFetch } from "./common";
import { User } from "./model";

export const USER_KEY = 'user';

export const useUserById = (userId: number) => useQuery<User>(
  [USER_KEY, userId],
  async () => {
    const response = await myFetch(`users/${userId}`)
    return {
      id: response.id,
      name: response.name,
      userName: response.username,
      email: response.email,
    }
  },
  { staleTime: Infinity }
);
