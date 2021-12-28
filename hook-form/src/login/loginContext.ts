import { createContext } from "react";

export type TOKEN = string | undefined

export interface LoginInfo {
  token: TOKEN
  setToken: (token: TOKEN) => void
}

export const loginContext = createContext<LoginInfo>({
  token: undefined,
  setToken: (token: TOKEN) => { }
})