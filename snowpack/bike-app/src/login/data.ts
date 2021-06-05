import { atom, selector } from 'recoil';

export type Role = 'user' | 'administrator';

export interface UserStateNotLogged {
  isLogged: false;
}

export interface UserStateLogged {
  isLogged: true;
  role: Role;
}

export type UserState = UserStateLogged | UserStateNotLogged;

export const userAtom = atom<UserState>({
  key: 'user',
  default: { isLogged: false },
});

export const isUserLogged = selector({
  key: 'isUserLogged',
  get: ({ get }) => {
    const userState = get(userAtom);
    return userState.isLogged;
  },
});

export const hasUserRole = selector({
  key: 'hasUserRole',
  get: ({ get }) => {
    const userState = get(userAtom);
    return userState.isLogged && userState.role === 'user';
  },
});

export const hasAdministratorRole = selector({
  key: 'hasAdministratorRole',
  get: ({ get }) => {
    const userState = get(userAtom);
    return userState.isLogged && userState.role === 'administrator';
  },
});
