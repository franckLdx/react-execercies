import { atomFamily } from "recoil";

export interface User {
  id: number,
  username: string,
}

export const usersFamily = atomFamily<User | undefined, number>({
  key: 'User',
  default: get,
});

async function get(userId: number): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to user ${userId}`);
  }
  return await response.json();
}