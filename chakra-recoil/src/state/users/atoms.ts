import { RecoilState } from "recoil";

export interface User {
  id: number,
  username: string,
  name: string,
  email: string;
}

export type UserState = RecoilState<User | undefined>
